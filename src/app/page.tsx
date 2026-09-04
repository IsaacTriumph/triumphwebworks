import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Placeholder description for the Triumph Web Works homepage.",
};

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
          Kicker placeholder
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
          Heading placeholder
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          Body copy placeholder describing the value proposition. Final messaging arrives in
          a later phase.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-cta px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-cta/90"
          >
            Get in Touch
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-foreground/10 bg-surface p-6">
              <h2 className="text-xl">Feature placeholder {i}</h2>
              <p className="mt-2 text-sm text-foreground/70">
                Supporting copy placeholder for this section.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
