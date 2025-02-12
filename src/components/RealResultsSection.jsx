import { useState, useEffect } from "react";
import logo from "../assets/image 4.png";
import svgIcon1 from "../assets/result1.svg";
import svgIcon2 from "../assets/result2.svg";
import svgIcon3 from "../assets/result_3.svg";
import logo2 from "../assets/image 5.png";
import logo3 from "../assets/image6.svg";

export default function RealResultsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    {
      title:
        "Enabled a medium-sized manufacturer to expand into new markets with a tailored sales strategy.",
      logo: logo3,
      svg: svgIcon3,
      svgClass: "w-[609px] h-[176px] bottom-0 right-0",
      percentage: "12.5%",
    },
  ];

  // Update isMobile state when screen resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile next function
  const handleNextMobile = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Loop back to first
    }
  };

  // Desktop next function
  const handleNextDesktop = () => {
    if (index < items.length - 2) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Loop back to first
    }
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative w-full bg-[#141414] text-white py-16 px-4 md:px-8 flex items-center overflow-x-hidden min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-light">Real Results</h2>
        <h3 className="text-4xl md:text-6xl font-bold mt-2">
          for <span className="text-white">Real Businesses</span>
        </h3>

        {/* Subheading */}
        <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-3xl">
          We’re proud to have supported a diverse range of clients, helping them
          unlock their potential and reach new heights.
        </p>

        {/* Slider Section */}
        <div className="relative mt-12 overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-[#1E1E1E] p-6 rounded-2xl shadow-lg flex flex-col justify-between relative flex-none w-full md:w-[calc(50%-1rem)] min-w-full md:min-w-[calc(50%-1rem)] mx-2 h-[400px] md:h-[380px]"
              >
                {/* Logo at the top */}
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className={`${item.logo === logo2 ? "w-18" : "w-12"} h-12`}
                  />
                  {item.percentage && (
                    <p className="text-4xl md:text-7xl font-bold text-white px-8">
                      {item.percentage}
                    </p>
                  )}
                </div>

                {/* Card Text */}
                <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-70 px-7">
                  {item.title}
                </p>

                {/* Bottom SVG Graphic */}
                {item.svg && (
                  <img
                    src={item.svg}
                    alt="SVG Icon"
                    className={`absolute ${
                      item.svgClass.includes("w-[609px]")
                        ? "md:w-[500px] md:right-0"
                        : "md:w-[300px] md:right-4"
                    } bottom-0 right-0 max-w-[50%] md:max-w-none`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Arrows */}
        <div className="mt-8 flex justify-center md:justify-end space-x-4">
          {/* Previous Button */}
          <button
            className="p-3 bg-[#1E1E1E] rounded-full hover:bg-[#2E2E2E] transition-colors duration-300"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <svg
              className="w-24 h-5 md:w-32 md:h-6"
              viewBox="0 0 91 16"
              fill="none"
            >
              <path
                d="M0.292892 8.49519C-0.0976334 8.10467 -0.0976334 7.4715 0.292892 7.08098L6.65685 0.717018C7.04738 0.326494 7.68054 0.326494 8.07107 0.717018C8.46159 1.10754 8.46159 1.74071 8.07107 2.13123L2.41422 7.78809L8.07107 13.4449C8.46159 13.8355 8.46159 14.4686 8.07107 14.8592C7.68054 15.2497 7.04738 15.2497 6.65685 14.8592L0.292892 8.49519ZM91 8.78809H1V6.78809H91V8.78809Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="p-3 bg-[#1E1E1E] rounded-full hover:bg-[#2E2E2E] transition-colors duration-300"
            onClick={isMobile ? handleNextMobile : handleNextDesktop}
          >
            <svg
              className="w-24 h-5 md:w-32 md:h-6"
              viewBox="0 0 91 16"
              fill="none"
            >
              <path
                d="M90.7071 8.49519C91.0976 8.10467 91.0976 7.4715 90.7071 7.08098L84.3431 0.717018C83.9526 0.326494 83.3195 0.326494 82.9289 0.717018C82.5384 1.10754 82.5384 1.74071 82.9289 2.13123L88.5858 7.78809L82.9289 13.4449C82.5384 13.8355 82.5384 14.4686 82.9289 14.8592C83.3195 15.2497 83.9526 15.2497 84.3431 14.8592L90.7071 8.49519ZM0 8.78809H90V6.78809H0V8.78809Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
