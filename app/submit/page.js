import Image from "next/image";
import { SubmitForm } from "@/components/submit-form";

export const metadata = {
  title: "Submit Entry :: Wayback Museum"
};

export default function SubmitPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <Image
          src="/icons/under-construction.svg"
          alt="Under construction banner"
          width={640}
          height={80}
          className="pixel-dot h-auto w-full border-2 border-slate-100"
        />
        <h1 className="mt-3 font-pixel text-xs text-retro-yellow blink-cursor">Submit a Fallen Website</h1>
        <p className="mt-3 text-3xl text-retro-electric">
          Know a forgotten corner of the web? Add it to the museum queue for review.
        </p>
      </div>
      <SubmitForm />
    </section>
  );
}
