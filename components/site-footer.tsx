import { BrandLockup } from "@/components/brand-lockup";
import { Container } from "@/components/primitives";
import { SiteLink as Link } from "@/components/site-link";
import { footerNavigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="max-w-sm">
            <Link href="/" aria-label="ShiftChef home" className="inline-flex rounded-xl">
              <BrandLockup inverse className="footer-brand" />
            </Link>
            <p className="mt-5 text-base leading-7 text-hero-copy">
              ShiftChef connects staffing decisions, service execution, communication, and review in one role-aware workspace.
            </p>
          </div>
          {Object.entries(footerNavigation).map(([title, links]) => (
            <nav aria-label={`${title} links`} key={title}>
              <h2 className="footer-heading">{title}</h2>
              <ul className="mt-4 space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link className="footer-link" href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} ShiftChef. All rights reserved.</p>
          <p>From roster to review, keep every service in sync.</p>
        </div>
      </Container>
    </footer>
  );
}
