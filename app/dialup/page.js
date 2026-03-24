import { DialupSimulator } from "@/components/dialup-simulator";

export const metadata = { title: "Dial-Up Speed Test :: Wayback Museum" };

export default function DialupPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">56k Dial-Up Simulator</h1>
        <p className="mt-3 text-3xl text-retro-electric">Experience modern pages through late-90s patience.</p>
      </div>
      <DialupSimulator />
    </section>
  );
}
