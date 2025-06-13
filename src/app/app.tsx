import { Navbar } from "@/modules/landing/navbar";
import { HeroSection } from "@/modules/landing/hero-section";
import { FeaturesSection } from "@/modules/landing/features-section";
import { HowItWorks } from "@/modules/landing/how-it-works";
import { PricingSection } from "@/modules/landing/pricing-section";
import { Footer } from "@/modules/landing/footer";
import { CTASection } from "@/modules/landing/cta-section";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
