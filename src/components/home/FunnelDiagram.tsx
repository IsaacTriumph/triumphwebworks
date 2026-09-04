"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SourceLabel from "@/components/SourceLabel";
import { EASE, STROKE_WIDTH } from "@/lib/design-system";

const STAGES = ["Visitors", "Leads", "Booked Calls", "Clients"];
const STAGE_Y = [20, 160, 300, 440];
const CX = 120;
const VIEW_W = 240;
const VIEW_H = 480;

/** Single Clear Path: minimal narrowing — nearly everyone who enters makes it through. */
const CLEAR_HALF = [56, 50, 46, 42];
/** Competing Offers: steep, asymmetric narrowing — the fragmentation reads as uneven left/right edges. */
const COMPETING_LEFT_HALF = [70, 46, 24, 6];
const COMPETING_RIGHT_HALF = [66, 40, 14, 2];

type Dot = { startX: number; startY: number; endX: number; endY: number };

/** Faint dots that drift off the "Competing Offers" path and fade, roughly between each stage. */
const DRIFT_DOTS: Dot[] = [
  { startX: CX - 58, startY: 90, endX: CX - 76, endY: 112 },
  { startX: CX + 53, startY: 90, endX: CX + 71, endY: 112 },
  { startX: CX - 35, startY: 230, endX: CX - 51, endY: 250 },
  { startX: CX + 27, startY: 230, endX: CX + 43, endY: 250 },
  { startX: CX - 15, startY: 370, endX: CX - 29, endY: 388 },
  { startX: CX + 8, startY: 370, endX: CX + 22, endY: 388 },
];

function edgePaths(leftHalf: number[], rightHalf: number[]) {
  const left = STAGE_Y.map((y, i) => `${CX - leftHalf[i]},${y}`).join(" L ");
  const right = STAGE_Y.map((y, i) => `${CX + rightHalf[i]},${y}`).join(" L ");
  return { left: `M ${left}`, right: `M ${right}` };
}

const clearPaths = edgePaths(CLEAR_HALF, CLEAR_HALF);
const competingPaths = edgePaths(COMPETING_LEFT_HALF, COMPETING_RIGHT_HALF);

export default function FunnelDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clearLeftRef = useRef<SVGPathElement>(null);
  const clearRightRef = useRef<SVGPathElement>(null);
  const compLeftRef = useRef<SVGPathElement>(null);
  const compRightRef = useRef<SVGPathElement>(null);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const drawPaths = [
      clearLeftRef.current,
      clearRightRef.current,
      compLeftRef.current,
      compRightRef.current,
    ].filter((el): el is SVGPathElement => el !== null);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      drawPaths.forEach((path) => {
        path.style.strokeDasharray = "none";
        path.style.strokeDashoffset = "0";
      });
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.setAttribute("cx", String(DRIFT_DOTS[i].endX));
        dot.setAttribute("cy", String(DRIFT_DOTS[i].endY));
        dot.style.opacity = "0.35";
      });
      return;
    }

    const lengths = drawPaths.map((path) => path.getTotalLength());
    drawPaths.forEach((path, i) => {
      path.style.strokeDasharray = `${lengths[i]}`;
      path.style.strokeDashoffset = `${lengths[i]}`;
    });
    dotRefs.current.forEach((dot) => {
      if (dot) dot.style.opacity = "0";
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to([clearLeftRef.current, clearRightRef.current], {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: EASE,
      }).to(
        [compLeftRef.current, compRightRef.current],
        { strokeDashoffset: 0, duration: 1.1, ease: EASE },
        "<0.15"
      );

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const d = DRIFT_DOTS[i];
        tl.to(dot, { opacity: 0.55, duration: 0.35, ease: EASE }, i === 0 ? ">-0.1" : "<0.08").to(
          dot,
          { attr: { cx: d.endX, cy: d.endY }, opacity: 0, duration: 0.85, ease: EASE },
          "<0.05"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
            Single Clear Path
          </p>
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="mt-3 w-full"
            role="img"
            aria-label="Funnel diagram: a single clear call to action retains visitors consistently through every stage, from visitors to leads to booked calls to clients."
          >
            <path
              ref={clearLeftRef}
              d={clearPaths.left}
              fill="none"
              className="stroke-accent"
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={clearRightRef}
              d={clearPaths.right}
              fill="none"
              className="stroke-accent"
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {STAGE_Y.map((y, i) => (
              <text
                key={STAGES[i]}
                x={CX - CLEAR_HALF[i] - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-muted font-sans text-[10px]"
              >
                {STAGES[i]}
              </text>
            ))}
          </svg>
        </div>

        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
            Competing Offers
          </p>
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="mt-3 w-full"
            role="img"
            aria-label="Funnel diagram: multiple competing offers cause the path to fragment and narrow sharply at every stage, with visitors drifting off and disappearing between stages."
          >
            <path
              ref={compLeftRef}
              d={competingPaths.left}
              fill="none"
              className="stroke-accent/45"
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={compRightRef}
              d={competingPaths.right}
              fill="none"
              className="stroke-accent/45"
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {DRIFT_DOTS.map((d, i) => (
              <circle
                key={`${d.startX}-${d.startY}`}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                cx={d.startX}
                cy={d.startY}
                r={2.5}
                className="fill-accent"
              />
            ))}
            {STAGE_Y.map((y, i) => (
              <text
                key={STAGES[i]}
                x={CX - COMPETING_LEFT_HALF[i] - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-muted font-sans text-[10px]"
              >
                {STAGES[i]}
              </text>
            ))}
          </svg>
        </div>
      </div>

      <SourceLabel
        href="https://marketingltb.com/blog/statistics/landing-page-statistics/"
        tooltip="Single-CTA pages convert 3–5%+; multiple competing offers can reduce conversion by up to 266%. Source: Marketing LTB landing page statistics roundup."
      />
    </div>
  );
}
