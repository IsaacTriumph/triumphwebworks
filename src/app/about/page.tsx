import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Placeholder description for the Triumph Web Works About page.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8 sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
        Kicker placeholder
      </p>
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Heading placeholder</h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/80">
        Body copy placeholder. Full narrative and credentials content arrives in a later
        phase.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-foreground/10 bg-surface p-6">
          <h2 className="text-xl">Subheading placeholder</h2>
          <p className="mt-2 text-sm text-foreground/70">Supporting copy placeholder.</p>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-surface p-6">
          <h2 className="text-xl">Subheading placeholder</h2>
          <p className="mt-2 text-sm text-foreground/70">Supporting copy placeholder.</p>
        </div>
      </div>
    </section>
  );
}
