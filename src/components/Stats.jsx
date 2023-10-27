import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex flex-wrap justify-between w-1/2 mt-10 mx-[250px] p-5">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="w-48 h-48 relative mb-10 pr-10 bg-transparent-white rounded-2xl justify-center items-center"
        >
          <div className="absolute top-2 right-2 rounded-full overflow-hidden">
            <img src={stat.img} alt={stat.name} className="w-12 h-12" />
          </div>
          <div className="p-5">
            <img src={stat.imgContent} alt={stat.name} className="mb-2 w-2/3" />
            <p className="mb-2 text-white">{stat.name}</p>
            <h2 className="font-bold text-white">{stat.content}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
