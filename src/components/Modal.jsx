import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ open, onClose, title, children }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKeyDown);

    // Focus the dialog for accessibility.
    window.setTimeout(() => panelRef.current?.focus?.(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-3xl border border-white/10 bg-glass backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
          <h3 className="min-w-0 flex-1 pr-2 text-base font-semibold text-white leading-snug">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-2xl border border-white/10 bg-white/5 p-0 leading-none hover:bg-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors [&>svg]:block"
            aria-label="Close dialog"
          >
            <FiX size={18} strokeWidth={2.25} className="pointer-events-none" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

