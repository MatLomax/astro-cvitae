import type { CvData } from "./cv.types";

export const cv: CvData = {
  header: {
    name: "Mathieu Lomax",
    title: "Senior Full-Stack Developer",
    location: "Góis, Portugal",
    email: "mat.lomax@gmail.com",
    github: "MatLomax",
  },
  summaryHtml:
    'Remote-first senior full-stack developer with 9+ years delivering production web apps and owning end-to-end delivery (discovery <span class="arrow-inline">→</span> build <span class="arrow-inline">→</span> deployment). Specialised in modern product front-ends (React/Next.js, TypeScript) and robust back ends (Node.js, C#/.NET, relational databases), with a track record of turning ambiguous requirements into clean, scalable implementations and raising engineering standards through strong review and practices.',
  experience: [
    {
      company: "LMTY - AI Business Analysis",
      project: {
        title: "Foundling LLM-powered business research SaaS",
        summary:
          "Incubator-style, engineering-led discovery: rapidly prototyped and iterated on an LLM-driven research platform, shipping end-to-end features while the product direction evolved through continuous experimentation and user feedback.",
      },
      roles: [
        {
          title: "Full-Stack Software Developer",
          dates: "November 2024 – Current",
        },
      ],
      sections: [
        {
          heading: "Principal front-end developer",
          bullets: [
            {
              text: "Owned the entire Next.js App Router front-end, leading SSR-first routing, reusable layout patterns, and performant client composition across the product",
              skills: ["Next.js", "React", "TypeScript", "Tailwind"],
            },
            {
              text: "Built form-heavy product flows with strict schema validation, resilient error handling, and highly reusable UI state patterns",
              skills: ["Typescript", "React Hook Form", "Zod"],
            },
            {
              text: "Shipped authentication and identity UX including OTP and email verification",
              skills: ["Auth.js", "Better Auth", "React Email", "Resend"],
            },
          ],
        },
        {
          heading: "Primary shared-platform developer",
          bullets: [
            {
              text: "Led the shared package used across apps, delivering typed domain models, database utilities, and common API contracts.",
              skills: ["TypeScript", "Drizzle ORM", "Zod", "PostgreSQL"],
            },
            {
              text: "Built out the core vector-enabled data structures and utilities used by both API and UI layers.",
              skills: [
                "PostgreSQL + pg_vector",
                "Drizzle ORM",
                "AWS S3",
                "Database Optimization",
              ],
            },
          ],
        },
        {
          heading: "Secondary back-end & DevOps contributor",
          bullets: [
            {
              text: "Contributed to LLM workflow and orchestration features, pairing with backend owners to extend graph-based pipelines.",
              skills: [
                "LangChain",
                "LangGraph",
                "OpenAI",
                "OpenRouter",
                "Firecrawl",
              ],
            },
            {
              text: "Contributed to building the project toolchain and infrastructure, including automated CI/CD pipelines and deployment workflows.",
              skills: [
                "AWS SDK",
                "Docker",
                "DevContainers",
                "Biome.js",
                "PNPM",
                "Turbo",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Rio IT Ltd",
      roles: [
        {
          title: "Lead Full-Stack Software Developer",
          dates: "April 2021 – November 2024",
        },
        {
          title: "Full-Stack Software Developer",
          dates: "December 2019 – April 2021",
        },
      ],
      sections: [
        {
          heading: "Bespoke Solutions",
          bullets: [
            "Lead Developer on numerous customer projects, managing every step from early-stage project meetings and calculating estimates to post-delivery training and ongoing maintenance and support.",
            {
              text: "Developing and maintaining 10+ client initiatives in fast-paced agile / scrum and waterfall environments",
              skills: [
                "C#",
                "RESTful APIs",
                "ASP.NET MVC",
                "OOP architecture",
                "SignalR",
                "jQuery",
                "HTML",
                "SCSS",
                "MySQL",
                "SQL Server",
                "database optimization",
              ],
            },
          ],
        },
        {
          heading: "Leadership",
          bullets: [
            {
              text: "Technical lead / SME for front-end technologies, researching, prototyping and rolling out new engineering and redesigning the existing i18n system for SPAs",
              skills: [
                "Redux",
                "Storybook",
                "responsive web design",
                "Vite",
                "Webpack",
                "ESLint",
                "Chromatic",
                "JWTs",
                "bundle optimization",
              ],
            },
            "Managing and mentoring teams of 1 – 3 junior developers per project, leading code reviews, reviewing Git pull requests, providing constructive feedback and ensuring adherence to best practices.",
          ],
        },
        {
          heading: "Innovation",
          bullets: [
            {
              text: "Developing an internal TypeScript/React component monorepo with 50+ reusable components and interactive Storybook, extensive theming with modular CSS variables, and custom React hooks for form handling, validation, permissions and i18n handling.",
              skills: [
                "TypeScript",
                "React",
                "Storybook",
                "CSS variables",
                "React hooks",
                "form handling",
                "validation",
                "permissions",
                "i18n handling",
              ],
            },
            {
              text: "Refactoring and extending internal multi-layered C# .NET libraries",
              skills: [
                "ORM caching",
                "JWTs",
                "OAuth",
                "tiered permission system",
                "MySQL and SQL Server data adapters",
                "data auditing",
                "S3",
                "Azure Storage",
                "automated CI pipeline",
              ],
            },
            {
              text: "Developing a new internal documentation site",
              skills: [
                "Astro SSG",
                "MDX",
                "Fuse.js",
                "automated CI/CD pipeline",
              ],
            },
            {
              text: "Developing internal tooling for scaffolding new projects and generating boilerplate",
              skills: ["Node.js", "Express", "React SSR", "Recoil", "Tailwind"],
            },
          ],
        },
        {
          heading: "DevOps / SysOps",
          bullets: [
            {
              text: "Provisioning Linux servers using RHEL / CentOS / Rocky on cloud servers for multiple staging environments",
              skills: [
                "AWS",
                "EC2",
                "Linux",
                "encrypted storage provisioning",
                "MySQL",
                "Apache",
                "LetsEncrypt",
                "Cron",
              ],
            },
            {
              text: "Provisioning a high-availability cluster for an in-house public-facing project",
              skills: ["AWS", "EC2", "S3", "ELB", "CloudFront"],
            },
            {
              text: "Building numerous scripts for automating DevOps tasks, code publishing and server deployments",
              skills: ["Bash", "PowerShell", "C#", "JS"],
            },
          ],
        },
        {
          heading: "Communication",
          bullets: [
            "Collaborating with BAs and directly with product owners to define software requirements and prioritize hotfixes and new features.",
            "Providing technical support to non-technical customers and third-party developers, onboarding and training.",
          ],
        },
      ],
    },
    {
      company: "Freelance",
      roles: [
        {
          title: "Copy-Editor / Proofreader",
          dates: "January 2017 – November 2019",
        },
      ],
      bullets: [
        "Working on many English-language articles / books / annual reports / academic papers across varied subject matters for numerous international companies, from basic proofreading (spelling, punctuation and formatting) to full copy-editing (factual correctness, logical continuity and consistent writing style).",
      ],
    },
    {
      company: "Realty.com",
      roles: [
        {
          title: "Senior Software Developer",
          dates: "September 2016 – January 2017",
        },
      ],
      bullets: [
        {
          text: "Developing an in-house product for housing rental listings for a US-based start-up with automated health monitoring, financial / activity graphing for an all-in-one admin dashboard",
          skills: [
            "PHP",
            "jQuery",
            "C#",
            "micro-services",
            "Elasticsearch",
            "AWS",
            "EC2",
            "ELK logging stack",
          ],
        },
        {
          text: "Provisioning and managing a containerized, high availability and redundant server cluster with automated zero-downtime deployments, multiple staging environments and on-demand scalability across multiple bare-metal servers and cloud hosting providers",
          skills: [
            "Ansible",
            "Puppet",
            "Docker",
            "HAProxy",
            "VRRP",
            "GitHub Actions",
            "AWS",
          ],
        },
      ],
    },
    {
      company: "EasyRent LLC",
      roles: [
        {
          title: "Software Developer",
          dates: "May 2015 – September 2016",
        },
      ],
      bullets: [
        {
          text: "Developing an in-house public-facing product for housing rental management for a US-based start-up",
          skills: [
            "PHP",
            "jQuery",
            "C#",
            "micro-services",
            "RabbitMQ",
            "ElasticSearch",
            "EC2",
            "ELK logging stack",
          ],
        },
        "Implementing customer subscriptions, payment handling and financial metrics reporting.",
      ],
    },
    {
      company: "MediPen Ltd",
      roles: [
        {
          title: "Software Developer",
          dates: "February 2015 – May 2015",
        },
      ],
      bullets: [
        {
          text: "Developing a bespoke e-commerce platform within very limited time constraints",
          skills: ["PHP", "CakePHP framework", "jQuery", "PayPal", "MySQL"],
        },
        "Developing an admin back-end with staff management, product dispatch wizard, and integration with third-party package printing hardware.",
      ],
    },
  ],
  personalProjects: [
    {
      name: "WireMod",
      href: "https://github.com/MatLomax/WireMod",
      description:
        "a mod for the game Terraria, inspired by the excellent WireMod for Garry's Mod",
      skills: ["C#", "XNA Framework"],
    },
    {
      name: "LocalDNS",
      description: "an open-source dynamic DNS system",
      skills: ["DNS protocol", "JS", "Koa", "MongoDB"],
    },
    {
      name: "Various media library management tools",
      skills: ["C#", "WinForms", "Bash"],
    },
  ],
  education: [
    {
      school: "University of Wales, Trinity St David",
      dates: "September 2012 – July 2014",
      program: "Software Engineering – HND / Associate Degree",
      details:
        "Vocational qualification focusing on practical modules over the purely theoretical",
      modules:
        "Algorithms & Data Structures, Critical Systems, Networking, Web Development, Desktop Development, Databases, Analysis & Design, 3D Development, Distributed Systems",
    },
    {
      school: "Petroc College",
      dates: "September 2010 – July 2012",
      program: "Computing, Maths, Philosophy – A Level",
    },
  ],
  professionalSkills: {
    citizenship:
      "UK and Belgian citizen, legal resident of Portugal, with full rights to work in the UK and EU.",
    languages: "English (native), French (native), Portuguese (beginner).",
    software: "Git, Visual Studio, Slack, Teams, Word, Excel, Photoshop.",
    associations: "Member of Mensa.",
    certifications: "Full UK driving license.",
  },
  references: "Available on request.",
};
