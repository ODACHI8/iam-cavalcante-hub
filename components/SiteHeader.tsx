"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes, site } from "@/lib/site";

type NavItem = {
  label: string;
  href: string;
};

export default function SiteHeader({
  links,
  brandLinksHome = true,
}: {
  links: NavItem[];
  brandLinksHome?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brand = (
    <>
      <span className="brand-name">{site.name}</span>
      <span className="brand-tag">{site.tagline}</span>
    </>
  );

  return (
    <header className={`header${scrolled ? " header-scrolled" : ""}`}>
      {brandLinksHome ? (
        <Link href={routes.home} className="brand">
          {brand}
        </Link>
      ) : (
        <div className="brand">{brand}</div>
      )}

      <nav className="nav">
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
        <a href={site.whatsapp} className="btn btn-primary btn-sm">
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
