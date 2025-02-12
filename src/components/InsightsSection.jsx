import image1 from "../assets/one.png";
import image2 from "../assets/two.png";
import image3 from "../assets/three.png";
import image4 from "../assets/four.png";
import image6 from "../assets/six.png";

export default function InsightsSection() {
  const cards = [
    {
      id: "card1",
      bgImage: image1,
      title: ["Unlocking Your Business's Full Potential:", "A Catalyst for Growth"],
      cols: "col-span-2", // Span 2 columns for wider cards
      height: "h-[320px]",
    },
    {
      id: "card2",
      bgImage: image2,
      title: ["From Strategy to Execution:", "A Catalyst for Growth"],
      cols: "col-span-1",
      height: "h-[314px]",
    },
    {
      id: "card3",
      bgImage: image3,
      title: ["Accelerating Sales Growth:", "A Roadmap to Increased Revenue"],
      cols: "col-span-1",
      height: "h-[314px]",
    },
    {
      id: "card4",
      bgImage: image4,
      title: ["Expert Guidance and Leadership:", "Building High-Performing Sales Teams "],
      cols: "col-span-1",
      height: "h-[314px]",
    },
    {
      id: "card5",
      bgImage: image2,
      title: ["Scaling Your Business with Expertise:", "Fractional Leadership for Sustainable Growth"],
      cols: "col-span-1",
      height: "h-[314px]",
    },
    {
      id: "card6",
      bgImage: image6,
      title: ["Sales Strategies That Deliver:", "Bridging the Gap Between Ambition and Results"],
      cols: "col-span-2",
      height: "h-[320px]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-gray-50 p-16 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-[62px] font-light leading-[67px] mb-8">
          Insights to <br />
          <span className="font-bold">Inspire Growth</span>
        </h1>
        <p className="text-xl max-w-3xl mb-16">
          Explore expert advice, trends, and strategies from the forefront of sales and leadership.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Uniform gap */}
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.cols} ${card.height} w-full rounded-3xl overflow-hidden relative group`}
              style={{ backgroundImage: `url(${card.bgImage})`, backgroundSize: 'cover' }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent rounded-3xl" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-bold mb-4">
                  {card.title[0]}<br />
                  <span className="font-light">{card.title[1]}</span>
                </h2>
                <button className="bg-[#004AAA] text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blur Effect */}
        <div className="absolute top-0 right-0 w-[555px] h-[555px] bg-gray-50 rounded-full opacity-5 blur-[500px]" />
      </div>
    </div>
  );
}