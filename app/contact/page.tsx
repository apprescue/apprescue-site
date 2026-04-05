import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AppRescue for diagnosis, debugging, security fixes, and AWS migration help.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container contactHero">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Tell Me What’s Broken</h1>
            <p className="pageIntro">
              Share the app, integration, or infrastructure issue and I’ll review the details. I
              usually respond within a few hours (max 12h).
            </p>
          </div>
          <div className="card">
            <p className="microLabel">Good Fit For</p>
            <ul className="checkList">
              <li>Broken AI app behavior</li>
              <li>Meta API issues</li>
              <li>Stripe or OAuth failures</li>
              <li>Firebase and Supabase risk reviews</li>
              <li>AWS migration planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contactGrid">
          <ContactForm />
          <aside className="card">
            <h2>How the Contact Flow Is Set Up</h2>
            <p>
              The form posts JSON to an AWS API Gateway endpoint backed by Lambda, which can then
              trigger Amazon SES for notifications or auto-replies.
            </p>
            <p>
              Add your endpoint as <code>NEXT_PUBLIC_CONTACT_ENDPOINT</code> and the site will send
              requests there automatically.
            </p>
            <div className="contactSocials">
              <p className="microLabel">Also Find AppRescue On</p>
              <div className="contactSocialList">
                {socialLinks.map((link) => (
                  <a
                    className="contactSocialLink"
                    href={link.href}
                    key={link.name}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
