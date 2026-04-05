import Link from "next/link";
import {
  homeMetrics,
  homeProblems,
  homeServices,
  processSteps,
  stackGroups,
  migrationItems,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Emergency Debugging for Modern Apps</p>
            <h1>Fixing Broken AI Apps, APIs &amp; Modern Cloud Systems</h1>
            <p className="heroCopy">
              I debug, secure, and migrate modern applications to production-ready AWS
              infrastructure so founders and teams can stop firefighting and get back to shipping.
            </p>
            <div className="heroActions">
              <Link className="button buttonPrimary" href="/contact">
                Get Help
              </Link>
              <Link className="button buttonSecondary" href="/services">
                See Services
              </Link>
            </div>
            <p className="responsePromise">I usually respond within a few hours (max 12h).</p>
          </div>

          <div className="heroPanel">
            <div className="statusCard">
              <p className="microLabel">What I Fix</p>
              <ul className="statusList">
                <li>Broken AI app flows</li>
                <li>Meta API and webhook failures</li>
                <li>Firebase and Supabase security issues</li>
                <li>OAuth login loops and token bugs</li>
                <li>AWS migration planning and execution</li>
              </ul>
            </div>
            <div className="metricStrip">
              {homeMetrics.map((metric) => (
                <div key={metric.title}>
                  <strong>{metric.value}</strong>
                  <span>{metric.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Entry Offer</p>
            <h2>Start with a Rapid Diagnosis</h2>
            <p>
              Not sure what’s broken? I analyze your app, API, or infrastructure and identify the
              exact issue so you stop guessing and start fixing the real problem.
            </p>
          </div>
          <div className="diagnosisGrid">
            <div className="card accentCard">
              <h3>What’s Included</h3>
              <ul className="checkList">
                <li>Root cause analysis</li>
                <li>Security risks and exposure review</li>
                <li>Prioritized fix plan</li>
                <li>AWS migration recommendations</li>
              </ul>
            </div>
            <div className="card priceCard">
              <p className="microLabel">Pricing</p>
              <p className="price">Starting from $49</p>
              <p className="smallCopy">
                Your diagnosis fee is credited toward a full project if you want me to handle the
                fix.
              </p>
              <Link className="button buttonPrimary" href="/contact">
                Get Diagnosis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionContrast">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Core Services</p>
            <h2>Fix the Immediate Problem. Upgrade the Whole System.</h2>
          </div>
          <div className="serviceGrid">
            {homeServices.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Real Problems</p>
            <h2>The Kinds of Failures I See in the Wild</h2>
          </div>
          <div className="problemGrid">
            {homeProblems.map((problem) => (
              <div className="problemPill" key={problem}>
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionContrast">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Platforms</p>
            <h2>Systems &amp; Platforms</h2>
          </div>
          <div className="stackGrid">
            {stackGroups.map((group) => (
              <article className="card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container migrationGrid">
          <div>
            <p className="eyebrow">AWS Migration</p>
            <h2>Move from Fragile to Production-Ready</h2>
            <p className="sectionLead">
              Many broken apps do not only need a bug fix. They need a stronger foundation. I help
              teams migrate from shaky platform defaults into secure, scalable AWS architecture.
            </p>
          </div>
          <div className="migrationList">
            {migrationItems.map((item) => (
              <div className="migrationItem" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
          <div className="benefitBar">
            <span>Security</span>
            <span>Scalability</span>
            <span>Reliability</span>
          </div>
        </div>
      </section>

      <section className="section sectionContrast">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">How I Work</p>
            <h2>A Practical Rescue Process</h2>
          </div>
          <div className="stepsGrid">
            {processSteps.map((step, index) => (
              <div className="card stepCard" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaShell">
          <div>
            <p className="eyebrow">Need Help Fast?</p>
            <h2>Stop guessing. Get the real root cause.</h2>
            <p>
              Start with a diagnosis, fix the urgent issue, and upgrade the architecture if the app
              needs more than a patch.
            </p>
          </div>
          <Link className="button buttonPrimary" href="/contact">
            Get Help
          </Link>
        </div>
      </section>
    </main>
  );
}
