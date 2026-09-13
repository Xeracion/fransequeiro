import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-[family-name:var(--font-display)] text-sm italic text-[var(--muted)]">
          Dreams engineer, smile hunter.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hola@fransequeiro.com"
            aria-label="Email"
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/fransequeiro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Fran Sequeiro. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
