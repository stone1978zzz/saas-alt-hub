export interface AlternativeTool {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  website: string;
  affiliateUrl?: string;
  isOpenSource: boolean;
  isSelfHostable: boolean;
  hasFreeTier: boolean;
  startingPrice: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  stars?: string;
}

export interface PrimarySaaS {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  pricingStartsAt: string;
  whyLookForAlternatives: string[];
  alternatives: AlternativeTool[];
  faqs: { question: string; answer: string }[];
}

export const SAAS_DATABASE: PrimarySaaS[] = [
  {
    name: "Notion",
    slug: "notion-alternatives",
    category: "Productivity & Notes",
    tagline: "All-in-one workspace for notes, docs, and project management",
    description: "Notion is widely used for wikis, docs, and databases, but users often look for alternatives due to speed issues, offline limitations, and pricing at scale.",
    pricingStartsAt: "$10/user/month",
    whyLookForAlternatives: [
      "No true offline mode: can be slow or inaccessible without internet",
      "Expensive team pricing ($10-18/user/mo)",
      "Proprietary format with vendor lock-in",
      "Privacy and data sovereignty concerns (no self-hosting)"
    ],
    alternatives: [
      {
        name: "AppFlowy",
        slug: "appflowy",
        tagline: "Open-source Notion alternative built with Flutter & Rust",
        description: "AppFlowy is an open-source alternative that gives you 100% control of your data with native desktop performance and complete offline support.",
        website: "https://appflowy.io",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $5/mo (Cloud)",
        bestFor: "Privacy-conscious teams & developers needing offline speed",
        pros: ["100% offline first", "Native Rust & Flutter performance", "Self-hostable with Docker", "No telemetry"],
        cons: ["Smaller plugin ecosystem than Notion", "Mobile app still maturing"],
        stars: "55k+"
      },
      {
        name: "Obsidian",
        slug: "obsidian",
        tagline: "A second brain for your thoughts on top of plain Markdown files",
        description: "Obsidian stores all your notes locally as plain Markdown files. With 1,000+ community plugins, you can build your own personalized Notion-like workspace.",
        website: "https://obsidian.md",
        isOpenSource: false,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free / $4/mo (Sync)",
        bestFor: "Personal knowledge management & Markdown purists",
        pros: ["Plain text Markdown files (no lock-in)", "Massive plugin ecosystem (Dataview, Kanban)", "Blazing fast local search"],
        cons: ["Requires setup for collaboration", "Sync is paid unless using Git/iCloud"],
        stars: "N/A"
      },
      {
        name: "AFFiNE",
        slug: "affine",
        tagline: "Next-gen collaborative workspace integrating docs, whiteboards, and tables",
        description: "AFFiNE combines Notion's block-based docs with Miro's infinite canvas whiteboard, fully open-source and privacy-first.",
        website: "https://affine.pro",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Open-source) / $7.99/mo",
        bestFor: "Visual thinkers, designers, and agile sprint planners",
        pros: ["Dual-mode: Doc mode + Whiteboard canvas", "Local-first architecture", "Modern UI with real-time collaboration"],
        cons: ["Database formulas still evolving"],
        stars: "42k+"
      },
      {
        name: "Anytype",
        slug: "anytype",
        tagline: "Local-first, P2P encrypted personal workspace",
        description: "Anytype is built on an IPFS-like peer-to-peer protocol (Any-Sync), providing end-to-end encrypted notes, tasks, and relational databases.",
        website: "https://anytype.io",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (1GB P2P) / $8/mo",
        bestFor: "Web3 enthusiasts & zero-trust security advocates",
        pros: ["End-to-end encrypted", "Peer-to-peer sync", "Zero vendor access to your data"],
        cons: ["Steep learning curve with object graph concepts"],
        stars: "18k+"
      }
    ],
    faqs: [
      {
        question: "What is the best free open-source alternative to Notion?",
        answer: "AppFlowy and AFFiNE are currently the two leading open-source Notion alternatives. AppFlowy offers native desktop speed with Rust and Flutter, while AFFiNE adds an infinite whiteboard canvas."
      },
      {
        question: "Can I use Notion offline?",
        answer: "Notion has very limited offline caching and cannot create new pages reliably without an internet connection. If offline access is critical, Obsidian and AppFlowy are the top choices."
      }
    ]
  },
  {
    name: "Zapier",
    slug: "zapier-alternatives",
    category: "Workflow Automation",
    tagline: "Automate workflows between thousands of web apps",
    description: "Zapier connects apps together, but task limits, high pricing tiers, and execution timeouts drive technical teams to seek self-hosted or more flexible alternatives.",
    pricingStartsAt: "$29.99/month (750 tasks)",
    whyLookForAlternatives: [
      "Extremely expensive at scale ($300+/month for moderate task volumes)",
      "Strict step limits and polling delays on non-enterprise plans",
      "Inability to write custom code easily or self-host for data compliance",
      "Vendor lock-in on custom workflow logic"
    ],
    alternatives: [
      {
        name: "n8n",
        slug: "n8n",
        tagline: "Fair-code workflow automation with powerful custom code support",
        description: "n8n lets you build complex multi-step automations with conditional logic, custom JavaScript/Python code, and 400+ native integrations. Free to self-host with Docker.",
        website: "https://n8n.io",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $20/mo",
        bestFor: "Developers, technical teams, and cost-conscious startups",
        pros: ["Unlimited executions when self-hosted", "Run native JavaScript & Python code in any node", "Visual node-based canvas", "Built-in LangChain & AI agent nodes"],
        cons: ["Requires basic Docker/server knowledge to host"],
        stars: "48k+"
      },
      {
        name: "Make (Integromat)",
        slug: "make",
        tagline: "Visual platform for designing and automating complex business processes",
        description: "Make provides a visual flow-based canvas with fractional pricing compared to Zapier, allowing complex branching, error handling, and iterations.",
        website: "https://make.com",
        isOpenSource: false,
        isSelfHostable: false,
        hasFreeTier: true,
        startingPrice: "Free (1,000 ops) / $9/mo (10,000 ops)",
        bestFor: "No-code builders wanting 10x more operations for the same budget",
        pros: ["Visual execution flow with real-time payload debugging", "Much cheaper per operation than Zapier", "Advanced data manipulators & routers"],
        cons: ["Steeper learning curve than Zapier's linear zaps"],
        stars: "N/A"
      },
      {
        name: "Activepieces",
        slug: "activepieces",
        tagline: "Open-source business automation platform built for teams",
        description: "Activepieces is an open-source, Zapier-like automation platform with a modern TypeScript piece system and easy Docker deployment.",
        website: "https://activepieces.com",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Open source) / $10/mo",
        bestFor: "Teams looking for an easy-to-use open-source Zapier drop-in",
        pros: ["Clean and intuitive modern UI", "Easy to write custom pieces in TypeScript", "Fast community integrations"],
        cons: ["Fewer total integrations than Zapier (currently ~200+)"],
        stars: "12k+"
      }
    ],
    faqs: [
      {
        question: "Is n8n really a free alternative to Zapier?",
        answer: "Yes. n8n is free and source-available for self-hosting. You can run it on a $5/month VPS or your own home server with zero task/execution limits."
      },
      {
        question: "Why is Zapier so expensive?",
        answer: "Zapier charges per 'task' (every time an action runs). If you have an automation that processes 10,000 rows a day, Zapier can easily cost hundreds of dollars each month."
      }
    ]
  },
  {
    name: "Airtable",
    slug: "airtable-alternatives",
    category: "No-Code Database",
    tagline: "Connected apps and relational database builder for teams",
    description: "Airtable is the standard for visual databases, but row limits (50k rows on Pro) and seat-based enterprise pricing force growing businesses to migrate.",
    pricingStartsAt: "$24/user/month",
    whyLookForAlternatives: [
      "Severe row limits per base (hard limit even on paid tiers)",
      "Expensive per-seat pricing for read-only or occasional users",
      "API rate limiting (5 req/sec)",
      "Lack of self-hosting for enterprise GDPR/HIPAA compliance"
    ],
    alternatives: [
      {
        name: "Baserow",
        slug: "baserow",
        tagline: "Open-source no-code database built on PostgreSQL",
        description: "Baserow is an open-source Airtable alternative that can scale to millions of rows, powered by PostgreSQL with self-hosting options.",
        website: "https://baserow.io",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $5/mo",
        bestFor: "Companies needing unlimited rows and self-hosted PostgreSQL backing",
        pros: ["Handles millions of rows without slowdown", "Native PostgreSQL foundation", "REST API with Swagger documentation", "Role-based permissions"],
        cons: ["Interface designer is simpler than Airtable's mature apps"],
        stars: "20k+"
      },
      {
        name: "NocoDB",
        slug: "nocodb",
        tagline: "Turn any MySQL, Postgres, or SQLite database into a smart spreadsheet",
        description: "NocoDB connects directly to your existing production database and generates an Airtable-like visual interface with zero data migration needed.",
        website: "https://nocodb.com",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $9/mo",
        bestFor: "Engineering teams wanting an instant GUI for existing databases",
        pros: ["Works with existing MySQL, PostgreSQL, MariaDB, and SQLite", "Zero vendor lock-in", "Rich field types and visual views (Grid, Gallery, Kanban, Form)"],
        cons: ["Requires existing database management knowledge"],
        stars: "45k+"
      }
    ],
    faqs: [
      {
        question: "Can Baserow replace Airtable?",
        answer: "Yes, for 90% of use cases. Baserow provides grids, galleries, kanban boards, forms, formulas, and webhooks, with no artificial row limits when self-hosted."
      }
    ]
  },
  {
    name: "Datadog",
    slug: "datadog-alternatives",
    category: "DevOps & Monitoring",
    tagline: "Cloud-scale monitoring, APM, and log management",
    description: "Datadog offers comprehensive observability, but bill shock is legendary due to opaque host-based and volume-based pricing metrics.",
    pricingStartsAt: "$15/host/month + APM + Logs ($$$)",
    whyLookForAlternatives: [
      "Frequent bill shock due to custom metrics and log volume spikes",
      "Expensive APM tracing ($31/host) + separate log ingestion fees",
      "Closed-source proprietary agent with vendor lock-in",
      "High egress costs when shipping logs out of cloud environments"
    ],
    alternatives: [
      {
        name: "SigNoz",
        slug: "signoz",
        tagline: "Open-source observability powered by OpenTelemetry & ClickHouse",
        description: "SigNoz is an open-source APM, logs, and metrics platform built natively on OpenTelemetry and ClickHouse, saving up to 80% compared to Datadog.",
        website: "https://signoz.io",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $19.99/mo",
        bestFor: "Cloud-native startups and engineering teams wanting OpenTelemetry standards",
        pros: ["Native OpenTelemetry standard (no vendor lock-in)", "ClickHouse column-store engine provides 10x faster queries", "Integrated APM traces, logs, and metrics in one UI"],
        cons: ["Requires ClickHouse cluster management for very large scale"],
        stars: "19k+"
      },
      {
        name: "Grafana Stack (LGTM)",
        slug: "grafana",
        tagline: "Loki, Grafana, Tempo, and Mimir open observability stack",
        description: "The gold standard open-source monitoring stack combining Grafana for dashboards, Loki for logs, Tempo for traces, and Prometheus/Mimir for metrics.",
        website: "https://grafana.com",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $29/mo (Cloud)",
        bestFor: "DevOps engineers and enterprise infrastructure teams",
        pros: ["Unbeatable dashboard flexibility", "Loki indexes metadata only, cutting storage costs by 90%", "Industry-standard PromQL"],
        cons: ["Steeper setup and learning curve"],
        stars: "62k+"
      }
    ],
    faqs: [
      {
        question: "Why do companies leave Datadog?",
        answer: "The primary driver is unpredictability of billing. Datadog charges separately for hosts, APM, logs, synthetics, and custom metrics, leading to surprising 5-to-6 figure monthly invoices."
      }
    ]
  },
  {
    name: "Slack",
    slug: "slack-alternatives",
    category: "Team Communication",
    tagline: "Channel-based messaging platform for teams",
    description: "Slack is the enterprise chat default, but 90-day message history limits on free plans and $7.25-$12.50/user/month pricing push teams toward self-hosted solutions.",
    pricingStartsAt: "$8.75/user/month",
    whyLookForAlternatives: [
      "90-day message retention limit on the free tier",
      "Expensive per-user pricing for large communities or distributed teams",
      "Data stored on third-party servers with no self-hosting option",
      "Notification fatigue and distracting thread UI"
    ],
    alternatives: [
      {
        name: "Mattermost",
        slug: "mattermost",
        tagline: "Open-source collaboration platform for technical and operational teams",
        description: "Mattermost is an open-source Slack alternative designed for high-security environments, offering self-hosted chat, audio calls, playbooks, and boards.",
        website: "https://mattermost.com",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $10/user/mo",
        bestFor: "Engineering, defense, and privacy-focused enterprises",
        pros: ["Complete data sovereignty on your own VPC", "Slack-compatible webhooks and slash commands", "Integrated playbooks and boards"],
        cons: ["Mobile push notifications require setup or paid gateway"],
        stars: "30k+"
      },
      {
        name: "Zulip",
        slug: "zulip",
        tagline: "Organized team chat with unique topic-based threading",
        description: "Zulip combines the immediacy of real-time chat with the asynchronous structure of email, organizing every conversation into dedicated topic streams.",
        website: "https://zulip.com",
        isOpenSource: true,
        isSelfHostable: true,
        hasFreeTier: true,
        startingPrice: "Free (Self-hosted) / $6.67/user/mo",
        bestFor: "Distributed asynchronous teams & open-source communities",
        pros: ["Zero notification chaos with topic-based streams", "Never lose context in conversations", "100% open-source"],
        cons: ["Different paradigm requires initial team adjustment"],
        stars: "20k+"
      }
    ],
    faqs: [
      {
        question: "Is there a completely free self-hosted alternative to Slack?",
        answer: "Yes, Mattermost and Zulip can both be self-hosted on your own servers for free with no artificial user limits or message history deletion."
      }
    ]
  }
];
