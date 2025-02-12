import { useRef, useState, useEffect } from "react";
import backgroundSvg from "../assets/background.svg";
import heroimg from "../assets/heroimg.png";
import heroicon from "../assets/heroicon.svg";

const HeroSection = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-4 bg-[#141414] overflow-x-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-90">
        <img 
          src={backgroundSvg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar with Blur Effect on Scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-between items-center py-6 px-6 md:px-12 lg:px-24 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-[#141414]/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={heroicon} alt="Logo" className="w-12 h-12" />
          <div>
            <div className="text-xl font-medium">SALESCATALYST</div>
            <div className="text-xs tracking-[0.4em]">CONSULTING</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-11">
            <ul className="flex space-x-11">
              <li className="text-white cursor-pointer hover:text-gray-400 font-family-outfit"style={{letterSpacing: '-0.04em',fontSize:'16px'}}onClick={() => scrollToSection("home")}>Home</li>
              <li className="text-white cursor-pointer hover:text-gray-400 font-family-outfit"style={{letterSpacing: '-0.04em',fontSize:'16px'}} onClick={() => scrollToSection("service")}>Services</li>
              <li className="text-white cursor-pointer hover:text-gray-400 font-family-outfit" style={{letterSpacing: '-0.04em',fontSize:'16px'}} onClick={() => scrollToSection("about")}>About</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer" onClick={() => window.location.href = "mailto:chris@salescatalystconsulting.com"}>
              Contact Us
            </button>
          </div>
              </nav>

              {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <ul className="flex flex-col mt-20 space-y-6 p-6 text-lg">
          <li className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</li>
          <li className="cursor-pointer hover:text-gray-400" onClick={() => { scrollToSection("service"); setIsOpen(false); }}>Services</li>
          <li className="cursor-pointer hover:text-gray-400" onClick={() => { scrollToSection("about"); setIsOpen(false); }}>About</li>
          <li>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg" onClick={() => { scrollToSection("contact"); setIsOpen(false); }}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      
      {/* Hero Content */}
        <div className="relative z-10 text-left max-w-4xl transform px-4 md:px-0 md:ml-10 lg:ml-20 mt-50">
          <h1 className="text-4xl font-family-outfit font-bold md:text-6xl tracking-tight text-white" style={{ letterSpacing: '-0.04em' }}>
            Drive Profitable Revenue.
          </h1>
          <p className="mt-4 text-2xl md:text-3xl lg:text-5xl font-light text-white font-family-outfit">
            Your Catalyst to Reach New Horizons
          </p>
          <div className="mt-6">
            <a href="https://calendly.com/chris-salescatalystconsulting/30min" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Get a Free Consultation
            </a>
          </div>
        </div>

        {/* Hero Image */}
      <div className="relative mt-16 flex justify-center px-2 md:px-0">
        <img src={heroimg} alt="Hero" className="w-full max-w-7xl object-contain rounded-t-3xl" />
      </div>
    </div>
  );
};

export default HeroSection;
