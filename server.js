const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const Anthropic = require("@anthropic-ai/sdk");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
const anthropicModel = process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest";

const anthropic = anthropicApiKey
  ? new Anthropic({ apiKey: anthropicApiKey })
  : null;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeVibe(vibe) {
  const energy = clamp(Number(vibe?.energy ?? 50), 0, 100);
  const openness = clamp(Number(vibe?.openness ?? 50), 0, 100);
  const social = clamp(Number(vibe?.social ?? 50), 0, 100);

  return { energy, openness, social };
}

function extractTextFromAnthropicResponse(content) {
  if (!Array.isArray(content)) {
    return "";
  }

  return content
    .filter((item) => item && item.type === "text" && typeof item.text === "string")
    .map((item) => item.text)
    .join("\n")
    .trim();
}

function parseRecommendations(rawText) {
  if (!rawText) {
    throw new Error("The model returned an empty response.");
  }

  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (error) {
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not find JSON in the model response.");
    }
    parsed = JSON.parse(jsonMatch[0]);
  }

  if (!Array.isArray(parsed.recommendations)) {
    throw new Error("Response JSON did not include a recommendations array.");
  }

  const recommendations = parsed.recommendations
    .map((item) => ({
      title: String(item?.title || "Untitled"),
      year: Number(item?.year || 0) || null,
      reason: String(item?.reason || "A fitting choice for your current mood."),
      contentNote: String(item?.contentNote || "No major content warnings noted.")
    }))
    .slice(0, 5);

  if (!recommendations.length) {
    throw new Error("No recommendations were returned.");
  }

  return recommendations;
}

app.post("/api/recommendations", async (req, res) => {
  if (!anthropic) {
    return res.status(500).json({
      error: "ANTHROPIC_API_KEY is not configured. Add it to your .env file."
    });
  }

  const mood = typeof req.body?.mood === "string" ? req.body.mood.trim() : "";
  const vibe = normalizeVibe(req.body?.vibe || {});

  if (!mood || mood.length < 4) {
    return res.status(400).json({
      error: "Please describe your mood in at least a few words."
    });
  }

  try {
    const prompt = [
      "You are a thoughtful movie recommendation assistant.",
      "Pick 3 to 5 films that match the user's current mood and vibe preferences.",
      "Balance emotional fit, pacing, and social context.",
      "Avoid repeating extremely mainstream defaults unless they are truly the best fit.",
      "Return ONLY valid JSON with this exact shape:",
      "{",
      '  "recommendations": [',
      "    {",
      '      "title": "Movie Title",',
      '      "year": 2010,',
      '      "reason": "1-2 sentence personalized reason tied to mood + vibe",',
      '      "contentNote": "short non-graphic content note"',
      "    }",
      "  ]",
      "}",
      "Keep reasons concise and human.",
      "Do not include markdown fences or any extra keys.",
      "",
      `User mood: ${mood}`,
      `Vibe.energy (0-100): ${vibe.energy}`,
      `Vibe.openness (0-100): ${vibe.openness}`,
      "  0 = avoid heavy emotions, 100 = welcome emotional depth",
      `Vibe.social (0-100): ${vibe.social}`,
      "  0 = best for watching alone, 100 = best for group viewing"
    ].join("\n");

    const response = await anthropic.messages.create({
      model: anthropicModel,
      max_tokens: 900,
      temperature: 0.8,
      messages: [{ role: "user", content: prompt }]
    });

    const text = extractTextFromAnthropicResponse(response.content);
    const recommendations = parseRecommendations(text);

    return res.json({ recommendations });
  } catch (error) {
    const detail =
      error && typeof error.message === "string"
        ? error.message
        : "Unknown error while generating recommendations.";

    return res.status(500).json({
      error: `Failed to generate recommendations. ${detail}`
    });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Mood-to-Movie server running at http://localhost:${port}`);
});
