import { useRef } from "react";

const FooterSection = ({scrollToSection}) => {
    return (
      <footer className="bg-[#141414] text-white py-10 px-5 md:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end">
        <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="bg-[#1c1c1c] p-5 rounded-2xl w-full md:w-1/3 h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
          <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About Us</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact Us</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("service")}>Services</li>
          </ul>
          <p className="text-gray-500 mt-50">Es/En</p>
        </div>
    
        <div className="bg-[#1c1c1c] p-5 rounded-2xl w-full md:w-1/3 h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Terms</h3>
          <ul className="space-y-2 text-gray-300">
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookies</li>
          </ul>
          <p className="text-gray-500 mt-50">Sales Catalyst</p>
        </div>
        </div>
    
        <div className="text-left w-full md:w-1/2 mt-10 md:mt-0 md:pl-4 md:ml-[-230px]">
        <h2 className="text-5xl md:text-7xl font-light leading-tight">
          Catalyzing <br /> Revenue <br /> That Matters.
        </h2>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>Sales Catalyst Consulting. All Rights Reserved.</p>
        <p>2025</p>
      </div>
      </footer>
    );
  };
  
  export default FooterSection;
