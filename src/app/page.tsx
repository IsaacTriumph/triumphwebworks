import type { Metadata } from "next";
import Link from "next/link";
import PainPointsBody from "@/components/home/PainPointsBody";
import ValueProps from "@/components/home/ValueProps";
import StatPlaque, { type StatPlaqueProps } from "@/components/home/StatPlaque";

const STAT_PLAQUES: StatPlaqueProps[] = [
  {
    eyebrow: "HOW MANY VISITORS ACTUALLY TAKE ACTION",
    numeral: "4.9×",
    supportingText:
      "more visitors call, book, or buy — on the same traffic you're already paying for.",
    comparisonLines: ["2.35% typical site", "11.45% top-performing site"],
    sourceHref: "https://cropink.com/conversion-rate-optimization-statistics",
    align: "left",
  },
  {
    eyebrow: "ONE CLEAR NEXT STEP, NOT FIVE COMPETING ONES",
    numeral: "+28%",
    supportingText:
      "more visitors act when you give them a single clear button instead of many.",
    comparisonLines: ["10.5% with 5+ buttons or links", "13.5% with one clear button"],
    sourceHref: "https://vwo.com/blog/landing-page-statistics/",
    align: "right",
  },
  {
    eyebrow: "SHOWING VS. TELLING WHAT YOU DO",
    numeral: "+65%",
    supportingText:
      "more visitors act when a short video explains what you do, before they ask.",
    comparisonLines: ["2.9% with no video", "4.8% with a short video"],
    sourceHref: "https://www.aberdeen.com/cmo-essentials/39-essential-content-marketing-facts/",
    align: "left",
  },
  {
    eyebrow: "THE FORM BETWEEN A VISITOR AND YOU",
    numeral: "+120%",
    supportingText: "more people finish your contact form when it asks less of them.",
    comparisonLines: ["26% finish an 11-question form", "68.4% finish a 4-question form"],
    sourceHref: "https://www.reform.app/blog/research-how-layout-affects-form-completion-rates",
    align: "right",
  },
];

export const metadata: Metadata = {
  description:
    "Triumph Web Works renovates existing websites around one priority: turning visitors into clients. We fix the conversion architecture, not just the design.",
};

const ctaButtonClasses =
  "inline-flex items-center rounded-sm bg-cta px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-cta/90";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
        <p className="text-sm font-semibold text-kicker sm:text-base">
          Stop Losing Customers to a Website That Was Never Built to Convert.
        </p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Your website should be your best salesperson not a brochure.
        </h1>
        <p className="mt-6 text-lg text-foreground/80">
          Get more qualified leads from the visitors you already pay for, a steady stream
          of inquiries that actually become clients, a lower cost per acquisition, and a
          position where you are the obvious choice before the prospect even reaches out.
          No more losing opportunities to competitors with brochure websites.
        </p>
      </section>

      {/* Pain points */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl">
          Most agencies will give you a beautiful website. Almost none will give you one
          that closes.
        </h2>

        <div className="mt-10">
          <PainPointsBody />
        </div>

        <div className="mt-12">
          <Link href="/contact" className={ctaButtonClasses}>
            Book a Free Conversion Audit
          </Link>
        </div>
      </section>

      {/* Editorial stat plaques */}
      {STAT_PLAQUES.map((plaque) => (
        <StatPlaque key={plaque.eyebrow} {...plaque} />
      ))}

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <ValueProps />
      </section>

      {/* Primary CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 sm:px-8 sm:pb-32">
        <div className="rounded-sm border border-foreground/10 bg-surface p-8 sm:p-12">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Get Your Personal Conversion Scorecard.
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Where you stand vs. your industry benchmarks, what&apos;s holding you back, and
            the exact next step to fix it. No commitment required. Just clarity.
          </p>
          <p className="mt-4 text-foreground/70">
            You shouldn&apos;t have to chase every single client. We build your website to
            do the selling for you. It books the calls. It fills the pipeline. You just
            show up and close.
          </p>
          <Link href="/contact" className={`${ctaButtonClasses} mt-8`}>
            Get My Scorecard
          </Link>
        </div>
      </section>
    </>
  );
}
