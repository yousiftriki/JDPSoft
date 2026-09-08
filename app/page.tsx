import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { AuditSection } from "@/components/home/AuditSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <SolutionsSection />
      <WhyChooseSection />
      <AuditSection />
      <CaseStudiesSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
