import { Steps } from "../assets";

const Earn = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <img
        src={Steps}
        alt="rarity"
        className="sm:w-6/12 w-8/12 z-10 my-10 sm:my-20"
      />

      <div className="absolute z-0 w-[40%] h-[35%] earn__gradient" />
    </section>
  );
};

export default Earn;
