import { Rarity } from "../assets";

const RarityLevel = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="font-Inter font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] mt-10 sm:mt-5">
        Rarity Level
      </h2>
      <p className="font-Inter font-normal text-white text-[14px] leading-[30.8px] mx-2 mt-5">
        More infomation about the rarity levels of NFTs
      </p>
      <img src={Rarity} alt="rarity" className="sm:w-3/12 w-1/2 z-[10]" />
    </section>
  );
};

export default RarityLevel;
