import type { LucideIcon } from "lucide-react";
import { Globe, Megaphone, Bot, Blocks } from "lucide-react";

export const siteConfig = {
  name: "JDP.Soft",
  tagline: "Websites, AI & Automation for Growing Businesses",
  description:
    "JDPsoft builds digital systems that help businesses capture leads, respond faster, and eliminate repetitive work.",
};

export const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Websites", href: "/web-design" },
      { label: "Lead Generation", href: "/lead-generation" },
      { label: "AI Automation", href: "/ai-automation" },
      { label: "Custom Software", href: "/custom-software" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const solutions: Solution[] = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites",
    description: "Fast, modern websites built to convert visitors into leads.",
    cta: "Improve My Website",
    href: "#audit",
  },
  {
    id: "lead-generation",
    icon: Megaphone,
    title: "Lead Generation",
    description: "Systems for capturing, organizing, and following up with prospects.",
    cta: "Build My Lead System",
    href: "#audit",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "AI agents that handle repetitive conversations, tasks, and workflows.",
    cta: "Find What I Can Automate",
    href: "#audit",
  },
  {
    id: "custom-software",
    icon: Blocks,
    title: "Custom Software",
    description: "Apps, dashboards, portals, and tools built for your operations.",
    cta: "Discuss a Software Project",
    href: "#audit",
  },
];

export const whyChoosePoints = [
  "Clear project scope",
  "Practical recommendations",
  "Ongoing support available",
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
    problem: "Leads came in through the website but sat unanswered for days.",
    built: "Automated SMS follow-up and a shared CRM pipeline.",
    result: "Improved response speed",
  },
  {
    industry: "Professional Services",
    problem: "Customer records were split across email and spreadsheets.",
    built: "A centralized portal with automated intake.",
    result: "Centralized lead tracking",
  },
  {
    industry: "Local Retail",
    problem: "The old website didn't reflect the business anymore.",
    built: "A modern site with integrated booking.",
    result: "A more professional online presence",
  },
];

export const faqs = [
  {
    question: "What does JDPsoft build?",
    answer:
      "Websites, lead-generation systems, AI automation, and custom software — built around what your business actually needs to grow.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. Most of our clients are small and growing businesses that need better systems but don't have an internal team to build them.",
  },
  {
    question: "Can you automate customer messages or calls?",
    answer:
      "Yes. We build AI agents that handle inquiries, qualify leads, and book appointments, so your team spends less time on repetitive conversations.",
  },
  {
    question: "Can you work with my existing website or tools?",
    answer:
      "In most cases, yes. We can integrate with what you already use, or recommend a replacement if it's holding you back.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a free strategy call or request an audit. We'll learn about your business and recommend the right starting point.",
  },
];

export const trustedByPlaceholders = [
  "Business One",
  "Business Two",
  "Business Three",
  "Business Four",
  "Business Five",
];
