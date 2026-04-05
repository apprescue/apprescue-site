import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);

  if (!article) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="pageHero">
        <div className="container blogPostHero">
          <p className="eyebrow">{article.tag}</p>
          <h1>{article.title}</h1>
          <div className="blogMeta">
            <span>{article.published}</span>
            <span>{article.readTime}</span>
          </div>
          <p className="pageIntro articleIntro">{article.intro}</p>
        </div>
      </section>

      <section className="section">
        <article className="container blogPostShell">
          {article.sections.map((section) => (
            <section className="blogSection" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="blogCta">
            <h3>Need help with a similar issue?</h3>
            <p>
              If your app is stuck, insecure, or breaking in production, start with a diagnosis and
              get a clear fix plan.
            </p>
            <Link className="button buttonPrimary" href="/contact">
              Get Help
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
