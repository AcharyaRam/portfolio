import { useEffect, useState } from "react";

export default function InitialLoader({ minDurationMs = 650, onReady }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const t = window.setTimeout(() => {
      const elapsed = performance.now() - start;
      // Ensures we always show the loader long enough to feel intentional.
      if (elapsed >= minDurationMs) setReady(true);
      else window.setTimeout(() => setReady(true), minDurationMs - elapsed);
    }, minDurationMs);
    return () => window.clearTimeout(t);
  }, [minDurationMs]);

  useEffect(() => {
    if (ready && onReady) onReady();
  }, [ready, onReady]);

  if (ready) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div className="w-[min(420px,92vw)] rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/40 via-fuchsia-400/30 to-cyan-400/30 blur-[2px]" />
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-white/30 border-t-white/80" />
          </div>
          <div>
            <p className="text-sm text-white/70">Preparing your premium portfolio</p>
            <p className="text-lg font-semibold text-white">Ram Acharya</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-[shimmer_1.2s_infinite_linear] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
          <p className="mt-3 text-xs text-white/50">Hang tight...</p>
        </div>
      </div>
    </div>
  );
}

