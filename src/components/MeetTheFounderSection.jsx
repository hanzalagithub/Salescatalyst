import founder from '../assets/image (1).png';

export default function MeetTheFounderSection() {
  return (
    <section className="relative bg-[#141414] text-white py-10 px-4 md:px-8 flex items-center overflow-x-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-5xl font-light font-outfit">
          Sales Catalyst
        </h2>
        <h3 className="text-3xl md:text-6xl font-bold mt-4 font-outfit">
          Meet The Founder
        </h3>
    
        {/* Founder Content */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Founder Details */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="text-gray-300 font-outfit text-base md:text-lg" style={{ letterSpacing: '-0.01em' }}>
              Based in Buffalo, New York, <a href="https://www.linkedin.com/in/christopher-lubick-5072b723/" className="text-blue-400 underline hover:text-blue-500 transition-colors duration-300">Chris Lubick</a> is an entrepreneurial executive leader with over 20 years of experience in sales and business development across global technology and professional services markets. Over the course of his career, Chris’s teams have collectively generated over $1 billion in revenue.
            </p>
  
            <p className="text-gray-300 text-base md:text-lg mt-4 md:mt-6 font-outfit bg-[#252525] p-4 rounded-xl" style={{ letterSpacing: '-0.02em' }}>
              Chris excels in optimizing teams and processes, building strategic partnerships, and delivering sustainable growth.
            </p>
  
            <p className="text-gray-300 text-base md:text-lg mt-4 md:mt-6 font-outfit bg-[#252525] p-4 rounded-xl" style={{ letterSpacing: '-0.02em' }}>
              Chris holds dual bachelor’s degrees in international business and Spanish from the University of Buffalo and an MBA from Boston University. Outside of work, he is devoted to his family and raising awareness for Autism Spectrum Disorder, inspired by his son Jack, who has non-verbal autism.
            </p>
          </div>
  
          {/* Founder Image */}
          <div className="relative rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center order-1 md:order-2 mt-0 md:-mt-28">
            <a href="https://www.linkedin.com/in/christopher-lubick-5072b723/" className="w-full h-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <img 
                src={founder} 
                alt="Founder" 
                className="rounded-2xl h-full w-90 object-cover" 
              />
            </a>
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl text-center">
              <h4 className="text-2xl md:text-4xl font-bold">Chris Lubick</h4>
              <p className="text-gray-300 text-xs md:text-sm">Principal & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}