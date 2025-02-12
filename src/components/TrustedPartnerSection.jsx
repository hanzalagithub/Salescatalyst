import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import cz from "../assets/cz.svg";
import tp5 from "../assets/image.png";
import tp1 from "../assets/tp1.svg";
import tp2 from "../assets/tp2.svg";
import to6 from "../assets/tp6.svg";
import tp7 from "../assets/tp7.svg";
import tp8 from "../assets/tp8.svg";

export default function TrustedPartnerSection() {
  const cards = [
    {
      description: "Here’s why businesses choose SalesCatalyst Consulting:",
      img: tp1,
    },
    {
      title: "Expertise:",
      description: "Decades of experience in sales leadership and strategy.",
      img: tp2,
    },
    {
      title: "Customization:",
      description:
        "Tailored solutions that reflect your business’s unique DNA.",
      img: cz,
    },
    {
      title: "Results-Oriented:",
      description:
        "A track record of delivering measurable, sustainable growth.",
      img: tp5,
    },
    {
      title: "Flexibility:",
      description: "Fractional leaders that scale with you.",
      img: to6,
    },
    {
      title: "Collaboration:",
      description:
        "We work as an extension of your team to ensure, seamless integration.",
      img: tp7,
    },
    {
      description:
        "Let us be the partner you need to navigate challenges, and seize opportunities.",
      img: tp8,
    },
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Changed initial value
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4); // Adjusted for actual visible cards
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, cards.length - itemsPerPage);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) handleNext();
    else if (swipeDistance < -50) handlePrev();
  };

  // Navigation functions
  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };
  const cardClasses = (idx) => `
  bg-[#1E1E1E] rounded-2xl shadow-lg
  ${idx === 0 || idx === cards.length - 1 ?
    'w-full sm:w-[170px] lg:w-[180px]' : 
    'w-full sm:w-[340px] lg:w-[360px]'
  }
  shrink-0 flex flex-col justify-between
  min-h-[400px] md:h-[500px]
`;

  return (
    <section className="relative w-full bg-[#141414] text-white py-16 px-4 md:px-8 min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-left w-full">
        <h2 className="text-4xl md:text-4xl font-light">
          Your Trusted Partner
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold">
          for Sustainable Success
        </h2>
        <p className="text-gray-300 mt-6 text-lg max-w-3xl">
          We’re not just consultants—we’re catalysts for transformation.
        </p>

        {/* Slider Section */}
        <div className="mt-12 relative">
          {/* Mobile Arrows */}
          <div className="md:hidden flex justify-between absolute top-1/2 w-full z-20 px-2">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`p-2 bg-[#1E1E1E] rounded-full ${
                index === 0 ? "opacity-50" : "hover:bg-[#2E2E2E]"
              }`}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              // disabled={index === maxIndex}
              className={`p-2 bg-[#1E1E1E] rounded-full ${
                index === maxIndex ? "opacity-50" : "hover:bg-[#2E2E2E]"
              }`}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Card Slider - Modified for mobile */}
          <div
            className="overflow-hidden md:overflow-visible"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex space-x-4 md:space-x-8"
              animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {cards.map((item, idx) => (
                <div
                  key={item.title}
                  className={cardClasses(idx)}
                   // Added border radius
                          >
                            <div className="p-4 md:p-6">
                              <h4 className="text-lg md:text-xl font-semibold">{item.title}</h4>
                              <p className="text-gray-300 text-sm md:text-base mr-15 md:mr-0">
                              {item.description}
                              </p>
                            </div>
                            <div className="relative flex-1 mt-4">
                            <img
                              src={item.img}
                              alt="Icon"
                              className="w-full h-full object-fill"
                              style={{ borderRadius: '15px' }} // Added border radius
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex mt-8 justify-end items-center">
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className={`p-3 bg-[#1E1E1E] rounded-full hover:bg-[#2E2E2E] transition-colors ${
                  index === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg className="w-24 h-5" viewBox="0 0 91 16" fill="none">
                  <path
                    d="M0.292892 8.49519C-0.0976334 8.10467 -0.0976334 7.4715 0.292892 7.08098L6.65685 0.717018C7.04738 0.326494 7.68054 0.326494 8.07107 0.717018C8.46159 1.10754 8.46159 1.74071 8.07107 2.13123L2.41422 7.78809L8.07107 13.4449C8.46159 13.8355 8.46159 14.4686 8.07107 14.8592C7.68054 15.2497 7.04738 15.2497 6.65685 14.8592L0.292892 8.49519ZM91 8.78809H1V6.78809H91V8.78809Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                // disabled={index === maxIndex}
                className={`p-3 bg-[#1E1E1E] rounded-full hover:bg-[#2E2E2E] transition-colors ${
                  index === maxIndex ? "opacity-50" : ""
                }`}
              >
                <svg className="w-24 h-5" viewBox="0 0 91 16" fill="none">
                  <path
                    d="M90.7071 8.49519C91.0976 8.10467 91.0976 7.4715 90.7071 7.08098L84.3431 0.717018C83.9526 0.326494 83.3195 0.326494 82.9289 0.717018C82.5384 1.10754 82.5384 1.74071 82.9289 2.13123L88.5858 7.78809L82.9289 13.4449C82.5384 13.8355 82.5384 14.4686 82.9289 14.8592C83.3195 15.2497 83.9526 15.2497 84.3431 14.8592L90.7071 8.49519ZM0 8.78809H90V6.78809H0V8.78809Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
