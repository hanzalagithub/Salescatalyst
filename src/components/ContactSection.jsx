import svgraphic from "../assets/svgraphic.svg";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen bg-[#141414] text-white px-4 md:px-8 flex items-center overflow-x-hidden py-10">
      <div className="relative z-10 max-w-8xl mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-light">Ready to Take</h2>
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Sales to the Next Level?
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl">
          Whether you're looking to refine your strategy, optimize your
          processes, or empower your sales team, SalesCatalyst Consulting is
          here to help.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6">
          {/* Contact Form */}
          <div className="bg-[#1E1E1E] p-8 rounded-2xl shadow-lg flex-[2]">
            <h3 className="text-lg font-light mb-6 font-outfit">Contact Us</h3>
            <form
              className="space-y-6"
              action="https://formspree.io/f/place-your-formid-here"// Replace with your Formspree form action
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Your E-mail*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your E-mail"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="company" className="block text-gray-300 text-sm mb-2">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="phone" className="block text-gray-300 text-sm mb-2">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-[#2E2E2E] border border-gray-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-300 text-sm mb-2">
                  Tell Us More About Your Company*
                </label>
                <textarea
                  name="description"
                  required
                  className="w-full bg-[#2E2E2E] border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold mt-4 text-center"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="bg-[#1E1E1E] rounded-2xl shadow-lg flex flex-col justify-between flex-1">
            <div className="p-8">
              <p className="text-gray-300 text-xl">
                Let’s start the conversation and unlock your business’s full potential.
              </p>
            </div>
            <div className="p-8">
              <a
                href="mailto:chris@salescatalystconsulting.com"
                className="w-full inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold text-center"
              >
                Message our team
              </a>
            </div>
            <div className="mt-auto">
              <img
                src={svgraphic}
                alt="SVG Graphic"
                className="w-70 h-auto object-cover rounded-b-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
