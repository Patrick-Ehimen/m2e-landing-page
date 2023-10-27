import { rarityTable } from "../assets";

const RarityTable = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <img
        src={rarityTable}
        alt="rarity"
        className="sm:w-7/12 w-9/12 mt-5 z-[10] bg-[rgba(0, 0, 0, 0.6)]"
      />
      <div className="absolute z-[0] w-[50%] h-[15%] left card2_gradient m-" />
    </section>
  );
};

export default RarityTable;
