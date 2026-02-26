import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import OdooTrustSection from "@/components/sections/OdooTrustSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import CtaBannerSection from "@/components/sections/CtaBannerSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OdooTrustSection />
        <ProblemSection />
        <SolutionsSection />
        <WhyUsSection />
        <StatsSection />
        <CaseStudySection />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
