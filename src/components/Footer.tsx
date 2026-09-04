import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {new Date().getFullYear()} Triumph Web Works. All rights reserved.</p>
        <nav aria-label="Footer" className="flex gap-6">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
