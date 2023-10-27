import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex flex-wrap justify-between w-1/2 mt-10 mx-auto p-5">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="w-48 h-48 relative mb-10 px-5 bg-transparent-white rounded-2xl justify-center cursor-pointer items-center"
        >
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full">
            <img src={stat.img} alt={stat.name} className="w-12 h-12" />
          </div>

          <div className="p-5 pl-2">
            <img
              src={stat.imgContent}
              alt={stat.name}
              className="mb-2 w-12/12"
            />
            <p className="mb-2 text-neutral-600 text-sm font-bold font-Inter">
              {stat.name}
            </p>
            <h2 className="font-bold font-Inter text-white mt-12">
              {stat.content}
            </h2>
          </div>
          <div className="sm:hidden absolute z-0 w-[40%] h-[35%] bottom-0 hero__gradient" />
        </div>
      ))}
    </section>
  );
};

export default Stats;
