import type { Metadata } from "next";
import Link from "next/link";
import { packages, serviceRequests } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Rapid diagnosis, urgent fixes, and full AWS migration work for broken apps.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Choose the Right Level of Rescue</h1>
          <p className="pageIntro">
            Whether you need a fast diagnosis, a focused fix, or a full system rebuild with AWS
            migration, the goal is the same: get your app stable, secure, and production-ready.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container packageGrid">
          {packages.map((item, index) => (
            <article className={`card packageCard ${index === 0 ? "accentCard" : ""}`} key={item.title}>
              <p className="microLabel">{item.label}</p>
              <h2>{item.title}</h2>
              <p className="packagePrice">{item.price}</p>
              <p>{item.description}</p>
              <ul className="checkList">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="button buttonPrimary" href="/contact">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionContrast">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Common Service Requests</p>
            <h2>What Clients Usually Need Help With</h2>
          </div>
          <div className="serviceGrid">
            {serviceRequests.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
