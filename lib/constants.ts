import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Megaphone,
  Bot,
  Blocks,
  Search,
  Clock,
  RefreshCcw,
  Database,
  Users,
  Code2,
} from "lucide-react";

export const siteConfig = {
  name: "JDP.Soft",
  tagline: "Websites, AI & Automation That Help Businesses Grow",
  description:
    "We build websites, lead-generation systems, AI agents, and custom software that help businesses get more customers and eliminate repetitive work.",
};

export const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Websites", href: "/web-design" },
      { label: "Lead Generation", href: "/lead-generation" },
      { label: "AI & Automation", href: "/ai-automation" },
      { label: "Custom Software", href: "/custom-software" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export type Problem = {
  icon: LucideIcon;
  title: string;
};

export const problems: Problem[] = [
  { icon: Search, title: "Your website isn't generating leads" },
  { icon: Clock, title: "Leads aren't followed up quickly" },
  { icon: RefreshCcw, title: "Your team repeats the same admin work every day" },
  { icon: Database, title: "Customer information is scattered across apps" },
  { icon: Users, title: "You're paying people to manually move data around" },
  { icon: Code2, title: "You need software but don't want to hire a dev team" },
];

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
};

export const solutions: Solution[] = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites & Growth",
    description: "Conversion-focused websites built to generate business.",
    features: [
      "Website design",
      "E-commerce",
      "Landing pages",
      "Hosting",
      "SEO",
      "Analytics",
      "CRM/forms",
    ],
    cta: "Improve My Website",
    href: "/web-design",
  },
  {
    id: "lead-generation",
    icon: Megaphone,
    title: "Lead Generation & Marketing",
    description:
      "Systems that consistently find, contact, and follow up with potential customers.",
    features: [
      "Lead sourcing",
      "Outbound campaigns",
      "CRM setup",
      "Email/SMS sequences",
      "Sales pipelines",
      "Lead scoring",
      "Reporting",
    ],
    cta: "Build My Lead System",
    href: "/lead-generation",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    description: "Automate repetitive work and respond to customers faster.",
    features: [
      "AI receptionists",
      "AI sales agents",
      "Lead qualification",
      "Appointment booking",
      "Customer support",
      "CRM automation",
      "Document processing",
      "Workflow automation",
    ],
    cta: "Find What I Can Automate",
    href: "/ai-automation",
  },
  {
    id: "custom-software",
    icon: Blocks,
    title: "Custom Software",
    description: "Software designed around how your company actually operates.",
    features: [
      "Customer portals",
      "Internal dashboards",
      "Mobile/web apps",
      "APIs/integrations",
      "Workflow applications",
      "SaaS/MVP development",
    ],
    cta: "Discuss a Software Project",
    href: "/custom-software",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn how your business currently works and identify the highest-value problems.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We design the website, automation, AI, or software system around the desired outcome.",
  },
  {
    number: "03",
    title: "Build",
    description: "JDPsoft develops, integrates, and tests the solution.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy it and train your team.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "Hosting, support, marketing, and ongoing improvements continue afterward.",
  },
];

export type Package = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: "Website Growth System",
    price: "$2,500",
    description:
      "For businesses that need a professional site built to generate leads.",
  },
  {
    name: "Lead Generation System",
    price: "$3,000",
    priceNote: "+ monthly management",
    description:
      "For businesses that need consistent outreach, follow-up, and sales pipeline structure.",
  },
  {
    name: "AI Automation",
    price: "$3,000",
    description:
      "For businesses that want to automate repetitive customer, admin, or internal workflows.",
    featured: true,
  },
  {
    name: "Custom Applications",
    price: "$7,500",
    description:
      "For businesses that need portals, dashboards, apps, or custom internal software.",
  },
];

export type CaseStudy = {
  industry: string;
  problem: string;
  built: string;
  result: string;
};

// TODO: replace with real client case studies once available.
// These are clearly-marked placeholders — do not present as real client results.
export const caseStudies: CaseStudy[] = [
  {
    industry: "Home Services",
    problem:
      "Leads were coming in through the website but sitting unanswered for days.",
    built:
      "A lead-routing system with automated SMS follow-up and a shared CRM pipeline.",
    result: "Improved response speed",
  },
  {
    industry: "Professional Services",
    problem:
      "Customer records were split across email, spreadsheets, and a paper intake form.",
    built:
      "A centralized customer portal with automated intake and document handling.",
    result: "Centralized lead tracking",
  },
  {
    industry: "Local Retail",
    problem:
      "The existing website hadn't been updated in years and didn't reflect the business.",
    built: "A modern, conversion-focused website with integrated booking.",
    result: "Created a more professional online presence",
  },
];

export const faqs = [
  {
    question: "What type of businesses does JDPsoft work with?",
    answer:
      "We work with small and growing businesses — home services, local retail, professional services, and similar teams that need better systems but don't have an internal development or marketing department.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Websites are one part of what we do. We also build lead-generation systems, AI agents and automation, and custom software. Most clients start with one system and add others as they grow.",
  },
  {
    question: "Can you help with AI automation?",
    answer:
      "Yes. We build AI receptionists, sales agents, lead qualification flows, and workflow automation that connect to your existing tools. We'll tell you honestly what's worth automating and what isn't.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope. Our packages start at $2,500 for a website and $3,000 for lead generation or AI automation. Custom software typically starts at $7,500. We'll give you a firm quote after a short discovery call.",
  },
  {
    question: "Do you offer hosting and ongoing support?",
    answer:
      "Yes. We offer hosting, maintenance, and ongoing support after launch, along with continued optimization for marketing, automation, and performance.",
  },
  {
    question: "Can you work with my existing website or CRM?",
    answer:
      "In most cases, yes. We can integrate with your existing CRM, website platform, or tools, or recommend a replacement if what you have is holding you back.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A website typically takes 2–4 weeks. Lead-generation systems and automation projects usually run 3–6 weeks. Custom software depends on scope and is estimated during discovery.",
  },
];

export const trustedByPlaceholders = [
  "Business One",
  "Business Two",
  "Business Three",
  "Business Four",
  "Business Five",
];
