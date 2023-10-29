import { useState } from "react";
import { faq } from "../constants";
import { caretDown } from "../assets";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 mx-[50px] sm:mx-[200px]">
      <h2 className="flex flew-row justify-center text-white font-bold text-[36px] mt-7">
        FAQ
      </h2>
      {faq.map((item, index) => (
        <div
          key={index}
          className="w-full bg-transparent-white rounded-2xl font-bold text-lg font-Inter "
        >
          <button
            className="w-full text-left flex justify-between items-center p-4"
            onClick={() => handleClick(index)}
          >
            <span className="text-white">{item.question}</span>
            <img
              src={caretDown}
              alt="Toggle dropdown"
              className={`transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="mt-2 p-4">
              <p className="text-white">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
