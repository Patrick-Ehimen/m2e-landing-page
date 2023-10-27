import { Component5 } from "../assets";

const LaunchApp = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6 mx-5 sm:ml-[200px]">
    <div className="flex-1 flex-col flex justify-center items-start">
      <h2 className="font-Inter font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Download BetterStep
      </h2>
      <p className="font-Inter font-normal text-white text-[14px] leading-[30.8px] mx-2 mt-5">
        Start earning money by walking! Download our app now and convert your
        steps into earnings with our blockchain and cryptocurrency-based
        experience.
      </p>
    </div>

    <div className="flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative justify-center items-center">
      <img
        src={Component5}
        alt="card"
        className="w-[100%] h-[100%] hover:scale-105 z-[10]"
      />
    </div>

    <div className="absolute z-[0] w-[40%] h-[35%] right-20 card_gradient" />
  </section>
);

export default LaunchApp;
