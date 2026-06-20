import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center" aria-label="CustomerResults — Results Matter">
              <img
                src={logo}
                alt="CustomerResults"
                className="h-10 w-auto"
                width={640}
                height={280}
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Revenue acceleration and sales management for ambitious SMBs.
            </p>
          </div>
          {[
            { h: "Practice", links: ["Revenue Acceleration", "Sales Optimization", "GTM Strategy", "Coaching"] },
            { h: "Company", links: ["Case Studies", "About", "Insights", "Contact"] },
            { h: "Resources", links: ["Revenue Calculator", "Sales Assessment", "Playbooks", "Newsletter"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">{col.h}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a className="text-ink-soft transition-colors hover:text-ink" href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CustomerResults. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}