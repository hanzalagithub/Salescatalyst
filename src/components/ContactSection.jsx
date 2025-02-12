import svgraphic from '../assets/svgraphic.svg';

export default function ContactSection() {
    return (
      <section className="relative min-h-screen bg-[#141414] text-white px-4 md:px-8 flex items-center overflow-x-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-left">
      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-light">
      Ready to Take
      </h2>
      <h2 className="text-3xl md:text-5xl font-bold">
      Your Sales to the Next Level?
      </h2>
    
      {/* Subheading */}
      <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl">
      Whether you're looking to refine your strategy, optimize your processes, or empower your sales team, SalesCatalyst Consulting is here to help.
      </p>
    
      {/* Grid Layout */}
      <div className="mt-8 flex flex-col md:flex-row gap-6">
      {/* Left Column - Contact Form */}
      <div className="bg-[#1E1E1E] p-6 rounded-2xl shadow-lg flex-[2]">
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label htmlFor="name" className="block text-gray-300 text-xs mb-1">
          Your Name*
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
        />
        </div>
        <div>
        <label htmlFor="email" className="block text-gray-300 text-xs mb-1">
          Your E-mail*
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your E-mail"
        />
        </div>
        <div>
        <label htmlFor="company" className="block text-gray-300 text-xs mb-1">
          Company Name*
        </label>
        <input
          type="text"
          id="company"
          className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Company Name"
        />
        </div>
        <div>
        <label htmlFor="phone" className="block text-gray-300 text-xs mb-1">
          Phone*
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone"
        />
        </div>
        </div>
        <div>
        <label htmlFor="description" className="block text-gray-300 text-xs mb-1">
        Tell Us More About Your Company*
        </label>
        <textarea
        id="description"
        className="w-full bg-[#2E2E2E] border border-gray-400 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        rows="3"
        />
        </div>
        <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
        >
        Schedule a Consultation
        </button>
        </form>
      </div>
    
      {/* Right Column - Card with Text and SVG */}
      <div className="bg-[#1E1E1E] rounded-2xl shadow-lg flex flex-col justify-between flex-1">
        {/* Text Section */}
        <div>
        <p className="text-gray-300 text-xl p-6">
        Let’s start the conversation and unlock your business’s full potential.
        </p>
        </div>
    
        {/* SVG Graphic */}
        <div className="mt-4">
        <img src={svgraphic} alt="SVG Graphic" className="w-full h-auto max-w-xs object-fill rounded-xl" />
        </div>
      </div>
      </div>
      </div>
      </section>
    );
  }