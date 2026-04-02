export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.18),transparent_40%)]" />

      <div className="absolute inset-0 opacity-[0.55]">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/15 to-cyan-500/20 blur-3xl animate-[floaty_10s_ease-in-out_infinite]" />
        <div className="absolute left-10 top-60 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/20 to-indigo-500/20 blur-2xl animate-[floaty_12s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-400/15 to-indigo-500/20 blur-2xl animate-[floaty_14s_ease-in-out_infinite]" />
      </div>

      <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:44px_44px] animate-[gridDrift_18s_linear_infinite]" />
      </div>
    </div>
  );
}

