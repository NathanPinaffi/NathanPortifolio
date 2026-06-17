import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { site } from "@/data/site";

const icons = [
  { href: site.socials.github, icon: Github, label: "GitHub" },
  { href: site.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: site.socials.instagram, icon: Instagram, label: "Instagram" },
  { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-white/45">
          © {year} Nathan Pinaffi. Construído com obsessão por detalhes.
        </p>
        <div className="flex items-center gap-2">
          {icons.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              aria-label={it.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            >
              <it.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}