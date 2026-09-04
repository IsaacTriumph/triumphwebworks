/**
 * Fixed full-viewport backdrop: a faint vignette for depth, plus a grain
 * texture (see .bg-grain in globals.css) so the dark background reads as
 * tactile paper rather than a flat fill. Purely decorative.
 */
export default function GrainOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-background">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}
