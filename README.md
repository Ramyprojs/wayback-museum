# Mood-to-Movie

A polished single-page web app that recommends movies based on how you feel.

You describe your mood in plain text, tweak a few vibe sliders, and the app uses Anthropic to return 3 to 5 tailored movie picks with short personalized reasons.

## Features

- Minimal, cinematic single-page experience
- Mood-based recommendations powered by Anthropic API
- Vibe dial sliders:
	- Energy level
	- Emotional openness
	- Watching alone vs group
- Smart recommendation cards with:
	- Title
	- Year
	- Why it fits your current mood
	- Content note
- Local watch history (stored in browser `localStorage`)

## Tech Stack

- Node.js + Express backend
- Anthropic SDK (`@anthropic-ai/sdk`)
- Vanilla HTML/CSS/JS frontend

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Add your Anthropic key in `.env`:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

4. Start the app:

```bash
npm start
```

5. Open:

```text
http://localhost:3000
```

## Scripts

- `npm start` - Run production server
- `npm run dev` - Run server with auto-reload via nodemon

## API

### `POST /api/recommendations`

Request body:

```json
{
	"mood": "I'm stressed and want something cozy and funny",
	"vibe": {
		"energy": 35,
		"openness": 60,
		"social": 20
	}
}
```

Response shape:

```json
{
	"recommendations": [
		{
			"title": "Amelie",
			"year": 2001,
			"reason": "Whimsical warmth and gentle humor can lower stress without demanding heavy focus.",
			"contentNote": "Light romance themes"
		}
	]
}
```

## Notes

- The API key is used only on the server and never exposed to the browser.
- If no API key is configured, the app will return a clear setup error message.