/**
 * Small "Source" attribution link for charts/graphics. Sits in the corner of
 * the visual's container (parent must be `position: relative`), doubles as a
 * mobile tap target that opens the source in a new tab, and — when a
 * `tooltip` is given — shows the full citation on hover/focus (desktop).
 */
export default function SourceLabel({
  href,
  tooltip,
  className = "bottom-2 right-2",
}: {
  href: string;
  tooltip?: string;
  className?: string;
}) {
  return (
    <span className={`group absolute z-10 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] uppercase tracking-wide text-muted/80 transition-colors hover:text-muted"
      >
        Source
      </a>
      {tooltip && (
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full right-0 mb-2 w-56 origin-bottom-right rounded-sm border border-foreground/10 bg-surface p-3 text-xs leading-relaxed text-foreground/80 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {tooltip}
        </span>
      )}
    </span>
  );
}
