import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on debugging modern apps, securing integrations, and AWS migration.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Advice for Broken Apps, Failing APIs, and Risky Cloud Setups</h1>
          <p className="pageIntro articleIntro">
            These article previews use a more readable paragraph type style so longer educational
            content feels calmer and easier to scan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container articleGrid">
          {blogArticles.map((article) => (
            <article className="card articleCard" key={article.title}>
              <p className="microLabel">{article.tag}</p>
              <h2>{article.title}</h2>
              <div className="articleMeta">
                <span>{article.published}</span>
                <span>{article.readTime}</span>
              </div>
              <p>{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`}>{article.cta}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
