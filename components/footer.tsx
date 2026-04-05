import Link from "next/link";
import { socialLinks } from "@/lib/site-data";

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.8V11H8v3h2.3v7h3.2Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2.2A1.8 1.8 0 0 0 5.2 7v10c0 1 .8 1.8 1.8 1.8h10c1 0 1.8-.8 1.8-1.8V7c0-1-.8-1.8-1.8-1.8H7Zm5 2.3A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2.2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.7-3.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.4 8.8H3.6V20h2.8V8.8ZM5 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5 4Zm4.3 4.8H12v1.5h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.1 3.9 4.9V20h-2.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.3V8.8Z" />
        </svg>
      );
    case "Reddit":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.8 10.7a2 2 0 0 0-1.4.6 7.8 7.8 0 0 0-4.8-1.5l1-3.3 2.8.7a1.6 1.6 0 1 0 .3-1.1l-2.3-.6a.8.8 0 0 0-1 .5l-1.2 4a7.9 7.9 0 0 0-5 1.4 2 2 0 1 0-2.6 3 4 4 0 0 0 0 .8c0 3 3 5.4 6.6 5.4 3.7 0 6.7-2.5 6.7-5.4v-.8a2 2 0 0 0 .9-1.7 2 2 0 0 0-2-2Zm-9 3.3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm5.8 2.5c-.8.8-2.3 1-4.1 1-1.7 0-3.2-.2-4-1a.5.5 0 0 1 .7-.8c.5.5 1.7.7 3.3.7 1.6 0 2.8-.2 3.4-.7a.5.5 0 0 1 .7.8Zm-.2-2.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm2.2.2v.3l5.8 4.4L17.8 7v-.3H6.2Zm11.6 2L12.7 13a1.2 1.2 0 0 1-1.4 0L6.2 8.7v8.8h11.6V8.7Z" />
        </svg>
      );
  }
}

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <p className="footerBrand">
            <span>APP</span>RESCUE
          </p>
          <p>Debugging broken AI apps, APIs, and cloud systems.</p>
          <div className="socialLinks" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                className="socialLink"
                href={link.href}
                key={link.name}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={link.name}
              >
                <SocialIcon name={link.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="footerLinks">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footerBottom">
        <p>&copy; {new Date().getFullYear()} AppRescue. Built to convert problems into fixes.</p>
      </div>
    </footer>
  );
}
