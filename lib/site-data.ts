export const homeMetrics = [
  { value: "$49", title: "Diagnosis starts here" },
  { value: "$500+", title: "Fixes for urgent issues" },
  { value: "AWS", title: "Security, scale, reliability" },
];

export const homeServices = [
  {
    title: "AI App Debugging",
    description:
      "Untangle broken chains, model errors, failed streaming, rate-limit issues, and unstable AI workflows in real production apps.",
  },
  {
    title: "API Integration Fixes",
    description:
      "Resolve Meta, Stripe, OAuth, Twilio, and webhook problems that block payments, messaging, and login flows.",
  },
  {
    title: "Cloud Migration to AWS",
    description:
      "Move fragile setups into secure AWS architecture using S3, CloudFront, Lambda, API Gateway, Cognito, RDS, DynamoDB, and WAF.",
  },
  {
    title: "Security Hardening",
    description:
      "Lock down insecure rules, exposed databases, weak auth flows, and multi-tenant access issues before they become a breach.",
  },
];

export const homeProblems = [
  "Exposed Supabase databases",
  "Firebase insecure rules",
  "WhatsApp webhook failures",
  "OAuth login loops",
  "AI apps without rate limiting",
  "Multi-tenant data leaks",
];

export const stackGroups = [
  { title: "Frontend", items: "Next.js, React" },
  { title: "Backend", items: "Node.js, Express, FastAPI" },
  { title: "Databases", items: "Postgres, DynamoDB, Firebase, Supabase, MongoDB" },
  {
    title: "Cloud",
    items: "AWS S3, CloudFront, API Gateway, Lambda, RDS, DynamoDB, Cognito, WAF, Route53",
  },
  { title: "APIs", items: "Meta, Stripe, OAuth systems, Twilio, custom webhooks" },
  { title: "AI", items: "OpenAI APIs, LangChain, vector databases" },
];

export const migrationItems = [
  {
    title: "Supabase to AWS",
    description: "RDS + Cognito for tighter access control and long-term stability.",
  },
  {
    title: "Firebase to AWS",
    description: "DynamoDB + Lambda for more predictable scaling and backend control.",
  },
  {
    title: "Frontend to AWS",
    description: "S3 + CloudFront for fast global delivery and cleaner deployment paths.",
  },
  {
    title: "APIs to AWS",
    description: "API Gateway + Lambda for secure, observable, serverless execution.",
  },
];

export const processSteps = [
  "Identify issue",
  "Reproduce bug",
  "Fix root cause",
  "Secure system",
  "Improve architecture with AWS",
];

export const packages = [
  {
    label: "Service 1",
    title: "Rapid Diagnosis",
    price: "Starting from $49",
    description:
      "Best for founders and developers who are stuck, unsure where the failure is, or need an expert second opinion before spending more time.",
    points: [
      "Issue triage",
      "Root cause analysis",
      "Security review",
      "Fix roadmap",
      "AWS migration advice",
    ],
    cta: "Get Diagnosis",
  },
  {
    label: "Service 2",
    title: "Fix Issues",
    price: "Starting from $500",
    description:
      "Best for urgent production bugs, broken integrations, unstable AI features, login failures, webhook problems, and exposed backend issues.",
    points: [
      "Reproduce and isolate the bug",
      "Implement the fix",
      "Patch risky security gaps",
      "Stabilize the affected flow",
    ],
    cta: "Get Help",
  },
  {
    label: "Service 3",
    title: "Full Fix + Migration",
    price: "$1,000 - $5,000+",
    description:
      "Best when the real solution requires architecture changes, AWS migration, auth redesign, database cleanup, and stronger production controls.",
    points: [
      "Deep debugging and full remediation",
      "AWS migration planning and delivery",
      "Cloud security hardening",
      "Architecture improvements for growth",
    ],
    cta: "Plan the Fix",
  },
];

export const serviceRequests = [
  {
    title: "Meta API Failures",
    description:
      "WhatsApp onboarding issues, webhook verification failures, or broken Instagram and Facebook auth flows.",
  },
  {
    title: "Authentication Problems",
    description:
      "OAuth callback loops, expired tokens, login state bugs, and role-based access issues.",
  },
  {
    title: "Backend Instability",
    description:
      "Supabase policies, Firebase rules, race conditions, serverless timeouts, and unreliable integrations.",
  },
  {
    title: "AWS Upgrade Paths",
    description:
      "Rethink the stack around API Gateway, Lambda, Cognito, RDS, DynamoDB, WAF, and CloudFront.",
  },
];

export const caseStudies = [
  {
    title: "WhatsApp Webhook Failures in a Lead Capture App",
    sections: [
      {
        label: "Problem",
        copy: "Inbound messages were not reaching the app, leads were being dropped, and the business believed Meta was rejecting requests at random.",
      },
      {
        label: "Root Cause",
        copy: "The webhook verification path was misconfigured, signatures were not validated correctly, and retries were silently timing out in a serverless function.",
      },
      {
        label: "Fix",
        copy: "Corrected the verification flow, repaired signature validation, improved timeout handling, and added structured logging for each webhook event.",
      },
      {
        label: "Security Issue",
        copy: "The app trusted unauthenticated payloads and had no replay protection on webhook events.",
      },
      {
        label: "AWS Migration",
        copy: "Moved webhook handling to API Gateway + Lambda with CloudWatch visibility and safer secret handling.",
      },
      {
        label: "Final Architecture",
        copy: "Meta webhook to API Gateway, Lambda verification, queue-based processing, and a secured persistence layer.",
      },
    ],
  },
  {
    title: "Supabase Multi-Tenant Data Leak Risk",
    sections: [
      {
        label: "Problem",
        copy: "A SaaS founder noticed users could occasionally view records from the wrong workspace.",
      },
      {
        label: "Root Cause",
        copy: "Row-level access controls were incomplete and a service key was being used too broadly in app logic.",
      },
      {
        label: "Fix",
        copy: "Rebuilt the authorization flow, restricted privileged operations, and separated public and admin execution paths.",
      },
      {
        label: "Security Issue",
        copy: "Cross-tenant record exposure created a serious privacy and compliance risk.",
      },
      {
        label: "AWS Migration",
        copy: "Planned a move to Cognito-backed auth and RDS with stricter role enforcement and API boundaries.",
      },
      {
        label: "Final Architecture",
        copy: "Frontend on CloudFront, authenticated API layer, private relational database, and auditable access rules.",
      },
    ],
  },
  {
    title: "Firebase AI App with Insecure Rules and No Rate Limits",
    sections: [
      {
        label: "Problem",
        copy: "An AI-powered app became expensive, unstable, and vulnerable after users started abusing open endpoints.",
      },
      {
        label: "Root Cause",
        copy: "Firebase rules were overly broad, generation endpoints had no throttling, and the app leaked operational details in client responses.",
      },
      {
        label: "Fix",
        copy: "Locked down rules, added API protection, introduced usage controls, and separated client-safe and internal error handling.",
      },
      {
        label: "Security Issue",
        copy: "The app allowed unauthorized reads and invited runaway usage costs through unprotected AI calls.",
      },
      {
        label: "AWS Migration",
        copy: "Designed a migration toward Lambda-based API execution, DynamoDB storage, and WAF-backed request filtering.",
      },
      {
        label: "Final Architecture",
        copy: "Static frontend on S3 + CloudFront, API Gateway + Lambda for AI requests, controlled identities, and safer observability.",
      },
    ],
  },
];

export const blogArticles = [
  {
    slug: "why-whatsapp-webhooks-fail",
    tag: "Meta APIs",
    title: "Why WhatsApp Webhooks Fail Even When Meta Says Setup Is Correct",
    excerpt:
      "The real problem is often not the dashboard. It is inconsistent signature handling, mismatched callback paths, or serverless behavior that hides timeouts until events are already lost.",
    cta: "Read article",
    readTime: "6 min read",
    published: "April 2026",
    intro:
      "Teams often assume a failing WhatsApp integration means Meta rejected their setup. In practice, the dashboard is only one small part of the problem. Most delivery failures happen inside the app itself, especially around webhook verification, retries, and observability.",
    sections: [
      {
        heading: "Why the setup looks correct while messages still fail",
        paragraphs: [
          "A WhatsApp integration can appear healthy in the Meta dashboard while production traffic still breaks. That usually happens when the verification endpoint succeeds once during setup, but the long-term runtime path is unstable.",
          "Common examples include mismatched callback URLs between environments, signature verification logic that fails on certain payload shapes, or serverless handlers that time out before retry logic finishes cleanly.",
        ],
      },
      {
        heading: "What usually causes the real failure",
        paragraphs: [
          "The most common root causes are invalid signature handling, request bodies being transformed before validation, missing retry visibility, and secrets being rotated without a matching app update.",
          "Another recurring problem is treating webhook delivery like a simple synchronous request. If downstream processing is heavy, the safer pattern is to acknowledge quickly and move the actual work into a queue or background step.",
        ],
      },
      {
        heading: "How to make the integration production-ready",
        paragraphs: [
          "A stable setup validates signatures against the raw request body, keeps secrets isolated, logs each event with a correlation ID, and makes retries visible instead of silent.",
          "If the app is growing, this is often where an AWS path becomes useful. API Gateway plus Lambda gives cleaner request handling, CloudWatch improves debugging, and a queued processing design reduces dropped events.",
        ],
      },
    ],
  },
  {
    slug: "supabase-firebase-security-checks",
    tag: "Security",
    title: "Three Fast Checks for Supabase and Firebase Before a Leak Happens",
    excerpt:
      "Insecure rules and overpowered service credentials turn small prototype shortcuts into production risk. A short audit often reveals the dangerous parts quickly.",
    cta: "Read article",
    readTime: "5 min read",
    published: "April 2026",
    intro:
      "Most serious leaks in Supabase and Firebase apps do not come from dramatic hacks. They come from small defaults and rushed shortcuts that survive too long after launch. A quick audit can usually surface the biggest risks very fast.",
    sections: [
      {
        heading: "Check the access rules before anything else",
        paragraphs: [
          "The first question is simple: can one user ever reach another user's data by changing an ID, query, or client-side filter. If the answer is even maybe, the rules are not good enough yet.",
          "In Supabase that usually means reviewing row-level policies carefully. In Firebase it means reading the actual security rules instead of relying on assumptions from frontend behavior.",
        ],
      },
      {
        heading: "Look for service credentials in the wrong places",
        paragraphs: [
          "A common rescue pattern is finding a service key or admin credential doing too much inside app logic. That often starts as a shortcut and becomes a quiet privilege escalation risk later.",
          "Any privileged credential should be isolated behind a controlled backend path, never loosely available to general runtime code that handles untrusted requests.",
        ],
      },
      {
        heading: "Add auditability before scale makes it worse",
        paragraphs: [
          "If you cannot tell who accessed what, when, and from where, debugging a security problem becomes much slower and much more expensive.",
          "This is also the moment where an AWS migration can help. Moving toward Cognito-backed auth, clear API boundaries, and private database access makes long-term control much easier.",
        ],
      },
    ],
  },
  {
    slug: "when-apps-should-move-to-aws",
    tag: "AWS Migration",
    title: "When an App Needs More Than a Patch and Should Move to AWS",
    excerpt:
      "If auth is brittle, deployment is unpredictable, and integrations keep breaking, the cheapest move is often not another workaround. It is better architecture.",
    cta: "Read article",
    readTime: "7 min read",
    published: "April 2026",
    intro:
      "There is a point where another bug fix is no longer the cheapest option. If the app keeps failing because the underlying structure is too fragile, stronger architecture usually saves time and money faster than repeated patching.",
    sections: [
      {
        heading: "Signs the problem is architectural",
        paragraphs: [
          "If deployments are inconsistent, authentication is brittle, webhook handling is unreliable, or security controls depend on luck and habit, the problem is probably larger than a single bug.",
          "This is especially common in apps built quickly with multiple tools, partial backend logic, and production traffic that outgrew the original plan.",
        ],
      },
      {
        heading: "What a good AWS migration actually improves",
        paragraphs: [
          "A migration should not be a lift-and-shift for the sake of it. The real value comes from clearer trust boundaries, better deployment structure, better observability, and more explicit control over identities and data access.",
          "For many rescue projects, that means combinations like S3 and CloudFront for frontend delivery, API Gateway and Lambda for integration logic, Cognito for identity, and RDS or DynamoDB for controlled persistence.",
        ],
      },
      {
        heading: "How to migrate without making the app worse first",
        paragraphs: [
          "The safest path is usually staged. First stabilize the failing flows, then isolate risky components, then move the pieces that benefit most from AWS. Trying to migrate everything at once can create new outages.",
          "A diagnosis phase helps determine whether you need a focused fix, a partial migration, or a full infrastructure reset.",
        ],
      },
    ],
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    name: "Reddit",
    href: "https://reddit.com/",
  },
  {
    name: "Email",
    href: "mailto:hello@apprescue.dev",
  },
];
