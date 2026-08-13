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
  const brand = (
    <>
      <span className="brand-name">{site.name}</span>
      <span className="brand-tag">{site.tagline}</span>
    </>
  );

  return (
    <header className="header">
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
