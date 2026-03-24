import Link from "next/link";

export const metadata = {
  title: "About :: Wayback Museum"
};

export default function AboutPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">About This Museum</h1>
        <p className="mt-3 text-3xl leading-tight text-retro-electric">
          The internet forgets fast. This project exists to keep its formative places visible, understandable, and shared.
        </p>
        <p className="mt-3 text-2xl leading-snug text-[#dcf6ff]">
          Early websites were noisy, handmade, and deeply personal. They shaped online identity long before platform feeds and app stores. Preserving those spaces means preserving how people first learned to build culture online.
        </p>
        <p className="mt-3 text-2xl leading-snug text-[#dcf6ff]">
          Wayback Museum highlights stories, screenshots, and community memories so these sites remain legible to new generations of web users.
        </p>
      </div>

      <div className="retro-panel p-4 text-2xl">
        <p className="font-pixel text-[10px] text-retro-lime">Best viewed in Netscape Navigator</p>
        <p className="mt-2">Visitor Counter: 000042199</p>
        <p className="mt-4 font-pixel text-[10px] text-retro-pink">Webring Links</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link className="underline" href="/archive">
              Lost Portals Collective
            </Link>
          </li>
          <li>
            <Link className="underline" href="/submit">
              Vintage Homepage Registry
            </Link>
          </li>
          <li>
            <Link className="underline" href="/">
              Retro Browser Club
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
