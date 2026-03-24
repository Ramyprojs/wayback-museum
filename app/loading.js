export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="retro-panel w-full max-w-xl p-5 text-center">
        <h2 className="font-pixel text-xs text-retro-yellow">Connecting To Wayback Museum...</h2>
        <p className="mt-2 text-2xl text-retro-electric">Please wait while the modem sings.</p>
        <div className="mt-5 h-5 w-full border border-slate-300 bg-[#0d1231] p-1">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-retro-pink via-retro-electric to-retro-lime" />
        </div>
      </div>
    </div>
  );
}
