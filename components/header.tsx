"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="siteHeader">
      <div className="container navShell">
        <Link className="brand" href="/" aria-label="AppRescue home" onClick={closeMenu}>
          <span className="brandMark" aria-hidden="true" />
          <span className="brandWord">
            <span className="brandWordAccent">APP</span>
            RESCUE
          </span>
        </Link>

        <button
          className="navToggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <nav className={`siteNav ${isOpen ? "siteNavOpen" : ""}`} id="site-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={`navLink ${isActive ? "navLinkActive" : ""}`}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="button buttonDark" href="/contact" onClick={closeMenu}>
            Get Help
          </Link>
        </nav>
      </div>
    </header>
  );
}
