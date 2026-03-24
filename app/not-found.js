import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-6">
      <div className="retro-panel w-full max-w-2xl p-5 text-center">
        <h1 className="font-pixel text-sm text-retro-pink blink-cursor">404 NOT FOUND</h1>
        <p className="mt-4 text-3xl text-retro-electric">This page has moved or no longer exists.</p>
        <p className="mt-2 text-2xl text-[#d9f4ff]">Please check the URL or return to the museum lobby.</p>
        <Link href="/" className="retro-button mt-5 inline-block">
          Return Home
        </Link>
      </div>
    </section>
  );
}
