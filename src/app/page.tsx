import type { Metadata } from "next";
import Link from "next/link";
import FunnelDiagram from "@/components/home/FunnelDiagram";
import PainPointsBody from "@/components/home/PainPointsBody";
import BenchmarkChart from "@/components/home/BenchmarkChart";
import ValueProps from "@/components/home/ValueProps";

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
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-cta sm:text-base">
              Stop Losing Customers to a Website That Was Never Built to Convert.
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Your website should be your best salesperson not a brochure.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Get more qualified leads from the visitors you already pay for, a steady
              stream of inquiries that actually become clients, a lower cost per
              acquisition, and a position where you are the obvious choice before the
              prospect even reaches out. No more losing opportunities to competitors with
              brochure websites.
            </p>
          </div>
          <FunnelDiagram />
        </div>
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

        <div className="mt-16 max-w-xl">
          <BenchmarkChart />
        </div>

        <div className="mt-12">
          <Link href="/contact" className={ctaButtonClasses}>
            Book a Free Conversion Audit
          </Link>
        </div>
      </section>

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
