import { ImageOff } from "lucide-react";
import SourceLabel from "@/components/SourceLabel";
import { STROKE_WIDTH } from "@/lib/design-system";

export type StatPlaqueProps = {
  eyebrow: string;
  numeral: string;
  supportingText: string;
  comparisonLines: [string, string];
  sourceHref: string;
  /** Which side of the section the text block sits on; the media placeholder takes the other side. */
  align: "left" | "right";
};

/**
 * Full-width "Editorial Stat Plaque" section: a large numeral with supporting
 * copy and a comparison stat on one side, a reserved media placeholder on the
 * other. Alternates sides per instance via `align` — text, numeral, accent
 * line and comparison block move together; the media placeholder always
 * takes the opposite side.
 */
export default function StatPlaque({
  eyebrow,
  numeral,
  supportingText,
  comparisonLines,
  sourceHref,
  align,
}: StatPlaqueProps) {
  const isRight = align === "right";

  return (
    <section className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className={`flex flex-col ${
              isRight ? "lg:order-2 lg:items-end lg:text-right" : "lg:order-1"
            }`}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-kicker">
              {eyebrow}
            </p>
            <p className="mt-4 font-heading text-6xl leading-none text-foreground sm:text-7xl lg:text-[100px]">
              {numeral}
            </p>
            <p className="mt-5 max-w-md text-xl text-muted sm:text-2xl">{supportingText}</p>
            <div className="mt-8 flex gap-4">
              <span className="w-[1.5px] shrink-0 bg-accent" aria-hidden="true" />
              <div className="space-y-1 text-[13px] text-foreground/80">
                <p>{comparisonLines[0]}</p>
                <p>{comparisonLines[1]}</p>
              </div>
            </div>
          </div>

          <div className={isRight ? "lg:order-1" : "lg:order-2"}>
            <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-accent/20 bg-surface">
              <ImageOff
                size={40}
                strokeWidth={STROKE_WIDTH}
                className="text-foreground/30"
                aria-hidden="true"
              />
              <span className="sr-only">Reserved for media — coming soon</span>
            </div>
          </div>
        </div>
      </div>

      <SourceLabel href={sourceHref} className="bottom-6 right-6 sm:right-8" />
    </section>
  );
}
