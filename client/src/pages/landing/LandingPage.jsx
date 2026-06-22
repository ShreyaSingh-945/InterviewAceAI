
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";
function LandingPage(){
  return (
    <div>
      
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
       <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;