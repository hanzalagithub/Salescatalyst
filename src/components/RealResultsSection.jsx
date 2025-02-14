import logo from "../assets/image 4.png";
import svgIcon1 from "../assets/result1.svg";
import logo2 from "../assets/image 5.png";
import svgIcon2 from "../assets/result2.svg";

export default function RealResultsSection() {
  const items = [
    {
      title:
        "Scaled sales and profit for a family-owned commercial distribution business through streamlined processes and sales training.",
      logo: logo,
      svg: svgIcon1,
      svgClass: "w-[609px] h-[176px] bottom-0 right-0",
    },
    {
      title:
        "Enabled market expansion for an ESG consulting & analytics firm with a tailored sales strategy.",
      logo: logo2,
      svg: svgIcon2,
      svgClass: "w-[296px] h-[183px] bottom-0 right-0 md:bottom-0 md:right-4",
    },
  ];

  return (
    <section className="relative w-full bg-[#141414] text-white py-16 px-4 md:px-8 flex items-center min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-light">Real Results</h2>
        <h3 className="text-4xl md:text-6xl font-bold mt-2">
          for <span className="text-white">Real Businesses</span>
        </h3>
        <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-3xl">
          We’re proud to have supported a diverse range of clients, helping them
          unlock their potential and reach new heights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#1E1E1E] p-6 rounded-2xl shadow-lg flex flex-col justify-between relative h-[400px] md:h-[380px]"
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={item.logo}
                  alt="Logo"
                  className={`${item.logo === logo2 ? "w-18" : "w-12"} h-12`}
                />
              </div>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed px-7 mb-48">
                {item.title}
              </p>
              {item.svg && (
                <img
                  src={item.svg}
                  alt="SVG Icon"
                  className="absolute bottom-0 right-0 max-w-[50%] md:max-w-none"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
