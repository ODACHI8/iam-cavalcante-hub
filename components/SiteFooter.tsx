import Link from "next/link";
import { routes, site } from "@/lib/site";

type FooterLink = {
  label: string;
  href: string;
};

const defaultAreas: FooterLink[] = [
  { label: "Advocacia", href: routes.advocacia },
  { label: "Mediação de Leilões", href: routes.leiloes },
  { label: "Corretagem de Imóveis", href: routes.imoveis },
];

export default function SiteFooter({
  areasTitle = "Áreas",
  areas = defaultAreas,
}: {
  areasTitle?: string;
  areas?: FooterLink[];
}) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-name">{site.name}</span>
        <span className="footer-tag">{site.tagline}</span>
        <p className="footer-blurb">{site.blurb}</p>
        <span className="footer-address">
          {site.address[0]}
          <br />
          {site.address[1]}
        </span>
      </div>

      <div className="footer-col">
        <span className="footer-head">{areasTitle}</span>
        {areas.map((area) => (
          <Link key={area.label} href={area.href} className="footer-link">
            {area.label}
          </Link>
        ))}
      </div>

      <div className="footer-col">
        <span className="footer-head">Contato</span>
        <a href={site.whatsapp} className="footer-link">
          {site.phoneLabel}
        </a>
        <a href={`mailto:${site.email}`} className="footer-link">
          {site.email}
        </a>
        <a href={site.social.instagram} className="footer-link">
          Instagram
        </a>
        <a href={site.social.facebook} className="footer-link">
          Facebook
        </a>
        <a href={site.social.youtube} className="footer-link">
          YouTube
        </a>
      </div>

      <div className="footer-bottom">
        <span>{site.copyright}</span>
        <span>{site.legal}</span>
      </div>
    </footer>
  );
}
