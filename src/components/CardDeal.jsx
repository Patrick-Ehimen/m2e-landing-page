import { Group124, Rectangle18, Ellipse } from "../assets";

const CardDeal = () => (
  <section className="flex md:flex-row flex-col-reverse sm:py-16 mx-5 py-6 sm:mx-[200px]">
    <div className="flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative justify-center items-center">
      <img
        src={Group124}
        alt="card"
        className="w-8/12 h-[1/2] hover:scale-105 z-[10] "
      />
      <img
        src={Rectangle18}
        alt="rectangle"
        className="w-2/12 left-10 bottom-10 z-0 absolute "
      />
      <img
        src={Ellipse}
        alt="ellipse"
        className="w-2/12 right-10 bottom-20 z-0 absolute"
      />
    </div>
    <div className="flex-1 flex-col flex justify-center items-start">
      <h2 className="font-Inter font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Walk, earn, and thrive
      </h2>
      <p className="font-Inter font-normal text-white text-[14px] leading-[30.8px] mx-2 mt-5">
        The earned rewards are distributed equally in $BTT and $BFF tokens. Our
        goal is to provide users with a fun, rewarding, and innovative
        experience. Discover our project now and turn your steps into earnings.
      </p>

      <div className="flex mt-5 md:order-2">
        <button
          type="button"
          className="text-primary bg-[#D9D9D9C9] hover:bg-[#d9d9d9df]   font-bold font-Inter rounded-full text-sm px-4 py-2 text-center mr-3  hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Launch App
        </button>
      </div>

      <div className="absolute z-[0] w-[40%] h-[35%] left-20 card_gradient" />
    </div>
  </section>
);

export default CardDeal;
