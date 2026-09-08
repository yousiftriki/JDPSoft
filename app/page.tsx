import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AuditSection } from "@/components/home/AuditSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProblemsSection />
      <SolutionsSection />
      <HowItWorks />
      <AuditSection />
      <PackagesSection />
      <CaseStudiesSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
