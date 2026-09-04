import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Placeholder description for the Triumph Web Works Contact page.",
};

const fieldClasses =
  "mt-2 w-full rounded-md border border-foreground/15 bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8 sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
        Kicker placeholder
      </p>
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Heading placeholder</h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/80">
        Body copy placeholder inviting inquiries. Final copy and form logic arrive in a
        later phase.
      </p>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/80">
        <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
        Status placeholder — currently accepting new projects
      </div>

      <form className="mt-12 grid gap-6 sm:grid-cols-2" aria-label="Contact form placeholder">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Placeholder name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Placeholder email"
            className={fieldClasses}
          />
          <p className="mt-1 text-xs text-warning">
            Warning placeholder — required field example
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Placeholder message"
            className={fieldClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-cta px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-cta/90"
          >
            Submit placeholder
          </button>
        </div>
      </form>
    </section>
  );
}
