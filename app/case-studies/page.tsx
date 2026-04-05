import type { Metadata } from "next";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real debugging and AWS migration case studies from AppRescue.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Case Studies</p>
          <h1>Real Failures. Real Root Causes. Real Fixes.</h1>
          <p className="pageIntro">
            These examples show how I approach broken systems: identify the actual failure, fix the
            dangerous parts, improve security, and design a stronger AWS path when needed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container caseStudyList">
          {caseStudies.map((study, index) => (
            <article className="card caseStudyCard" key={study.title}>
              <p className="microLabel">Case Study {String(index + 1).padStart(2, "0")}</p>
              <h2>{study.title}</h2>
              <div className="caseGrid">
                {study.sections.map((section) => (
                  <div key={section.label}>
                    <h3>{section.label}</h3>
                    <p>{section.copy}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
