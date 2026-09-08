import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { solutions } from "@/lib/constants";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
];

const getStartedLinks = [
  { label: "Book a Free Strategy Call", href: "/book-a-call" },
  { label: "Get a Free Audit", href: "#audit" },
];

export function Footer() {
  return (
    <footer className="bg-soft-black text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-2">
            <Image
              src="/logo-white.png"
              alt="JDP.Soft"
              width={746}
              height={237}
              className="h-8 w-auto self-start"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Websites, AI &amp; automation that help businesses grow. A technology
              and growth partner for small and growing businesses.
            </p>
          </div>

          <FooterColumn
            title="Solutions"
            links={solutions.map((s) => ({ label: s.title, href: s.href }))}
          />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Get Started" links={getStartedLinks} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} JDP.Soft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
