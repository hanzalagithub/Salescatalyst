import { useRef } from "react";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import GrowthSection from "./components/GrowthSection";
import HeroSection from "./components/HeroSection";
import InsightsSection from "./components/InsightsSection";
import MeetTheFounderSection from "./components/MeetTheFounderSection";
import RealResultsSection from "./components/RealResultsSection";
import TrustedPartnerSection from "./components/TrustedPartnerSection";

const App = () => {
  const serviceRef = useRef(null);
  const resultsRef = useRef(null);
  const founderRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "service") serviceRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "results") resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "founder") founderRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <div ref={homeRef}><HeroSection scrollToSection={scrollToSection} /></div>
      <GrowthSection />
      <div ref={serviceRef}><TrustedPartnerSection /></div>
      <RealResultsSection />
      <div ref={aboutRef}><MeetTheFounderSection /></div>
      <div ref={contactRef}><ContactSection /></div>
      <InsightsSection />
      <FooterSection scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
