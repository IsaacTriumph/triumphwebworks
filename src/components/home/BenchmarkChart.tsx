"use client";

import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import SourceLabel from "@/components/SourceLabel";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { COLORS, power2Out } from "@/lib/design-system";

type LabelRenderProps = {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  value?: string | number | boolean | null;
};

type Row = {
  name: string;
  base: number;
  range: number;
  label: string;
  fillOpacity: number;
  sourceHref: string;
  sourceTooltip: string;
  labelClassName: string;
};

const CHART_TOOLTIP =
  "All-industry average: 4.02% (analysis of 74M+ visitors). Legal & financial services: 12–16% (Statista, via involve.me).";

const ROWS: Row[] = [
  {
    name: "All-Industry Average",
    base: 0,
    range: 4.02,
    label: "4.02%",
    fillOpacity: 0.55,
    sourceHref:
      "https://www.waypointconverts.com/landing-page-conversion-rate-benchmarks-by-industry-are-you-meeting-the-mark/",
    sourceTooltip: CHART_TOOLTIP,
    labelClassName: "top-[6%]",
  },
  {
    name: "Legal & Financial Services",
    base: 12,
    range: 4,
    label: "12–16%",
    fillOpacity: 1,
    sourceHref: "https://www.involve.me/blog/landing-page-conversion-rate",
    sourceTooltip: CHART_TOOLTIP,
    labelClassName: "bottom-[6%]",
  },
];

const ZERO_ROWS = ROWS.map((row) => ({ ...row, range: 0 }));

export default function BenchmarkChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reducedMotion = usePrefersReducedMotion();

  const data = reducedMotion || inView ? ROWS : ZERO_ROWS;
  const animate = !reducedMotion;

  return (
    <div ref={ref} className="relative">
      <h3 className="text-xl sm:text-2xl">Where High-Trust Industries Stand</h3>

      <div className="relative mt-6 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 8, right: 56, bottom: 8, left: 8 }}
            barCategoryGap="45%"
          >
            <XAxis type="number" domain={[0, 18]} hide />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={168}
              tick={{ fill: COLORS.muted, fontSize: 13 }}
            />
            <Bar dataKey="base" stackId="benchmark" fill="transparent" isAnimationActive={false} />
            <Bar
              dataKey="range"
              stackId="benchmark"
              radius={4}
              isAnimationActive={animate}
              animationDuration={1000}
              animationEasing={power2Out}
            >
              {data.map((row) => (
                <Cell key={row.name} fill={COLORS.accent} fillOpacity={row.fillOpacity} />
              ))}
              {/* Recharts' default LabelList text disappears once the bar's own grow-in
                  animation completes (an internal lifecycle quirk in this Recharts
                  version) — a custom content renderer sidesteps it by always drawing
                  the label from the bar's current geometry. */}
              <LabelList
                dataKey="label"
                position="right"
                content={(props: LabelRenderProps) => {
                  const { x, y, width, height, value } = props;
                  if (value == null || x == null || width == null) return null;
                  const labelX = Number(x) + Number(width) + 8;
                  const labelY = Number(y ?? 0) + Number(height ?? 0) / 2;
                  return (
                    <text
                      x={labelX}
                      y={labelY}
                      dy={4}
                      fill={COLORS.muted}
                      fontSize={13}
                      fontWeight={600}
                    >
                      {value}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {ROWS.map((row) => (
          <SourceLabel
            key={row.name}
            href={row.sourceHref}
            tooltip={row.sourceTooltip}
            className={`${row.labelClassName} right-0`}
          />
        ))}
      </div>
    </div>
  );
}
