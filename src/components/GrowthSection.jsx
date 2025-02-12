import icons8 from '../assets/icons8_bar_chart 1.svg';
import icons9 from '../assets/icons9.svg';
import icons10 from '../assets/icons10.svg';
import icon7 from '../assets/icon7.svg';

export default function GrowthSection() {
    return (
      <section className="relative w-full bg-[#141414] text-white py-16 px-4 md:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto text-left">
        <h2 className="text-3xl md:text-5xl font-light">
        Specializing in Growth
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold mt-2">
        for <span className="text-white">SMBs & FBOs</span>
        </h3>
        <p className="text-gray-300 mt-4 max-w-4xl text-left">
        We understand the unique challenges faced by small, medium, and family-owned businesses.
        </p>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
          title: "Identify Core Competencies",
          description: "We pinpoint and leverage your unique strengths",
          icon: icon7,
          },
          {
          title: "Tailored Sales Strategies",
          description: "We develop custom plans to meet your specific needs.",
          icon: icons8,              
          },
          {
          title: "Optimize Sales Processes",
          description: "We streamline your sales operations for maximum efficiency.",
          icon: icons9,              
          },
          {
          title: "Experienced Fractional Leadership",
          description: "We provide expert guidance to lead your team to success.",
          icon: icons10,              
          },
        ].map((item) => {
          const [firstWord, ...rest] = item.title.split(" ");
          return (
          <div
            key={item.title}
            className="bg-[#1E1E1E] rounded-2xl shadow-lg flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300"
          >
            <div className="space-y-6 p-8">
            <h4 className="text-sm font-light">
              <span className="font-light">{firstWord} </span>
              <span className="font-semibold">{rest.join(" ")}</span>
            </h4>
            <p className="text-gray-300 text-base">{item.description}</p>
            </div>
            <div className="">
            <img 
              src={item.icon} 
              alt={item.title} 
              className="w-[290px] h-[210px] flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-300" 
            />
            </div>
          </div>
          );
        })}
        </div>
      </div>
      </section>
    );
}
