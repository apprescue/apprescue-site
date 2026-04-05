import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About AppRescue and the practical debugging, security, and AWS migration approach.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Not a Portfolio. A Rescue Service for Broken Systems.</h1>
          <p className="pageIntro">
            AppRescue is built for founders and teams who already have something live, half-live,
            or badly stuck and need help diagnosing the failure, securing the system, and making it
            stable enough to grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container aboutGrid">
          <div className="aboutCopy">
            <h2>What Makes This Different</h2>
            <p>
              This service focuses on rescue work: apps that were built quickly, integrations that
              used to work, cloud systems that became fragile, and AI products that hit production
              problems before the architecture was ready.
            </p>
            <p>
              The goal is not to show off past projects. The goal is to solve the issue in front of
              you, reduce risk, and build a cleaner path forward.
            </p>
          </div>
          <div className="card">
            <h3>Core Expertise</h3>
            <ul className="checkList">
              <li>Debugging real-world failures</li>
              <li>Fixing security issues</li>
              <li>Resolving Meta, Stripe, and OAuth integration problems</li>
              <li>Migrating apps to AWS</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
