import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {stats.map((stat) => (
        <div key={stat.id} className="w-1/2 h-48 relative mb-2">
          <div className="absolute top-2 right-2 rounded-full overflow-hidden">
            <img src={stat.img} alt={stat.name} className="w-12 h-12" />
          </div>
          <div className="p-5">
            <img src={stat.imgContent} alt={stat.name} className="mb-2" />
            <p className="mb-2 text-white">{stat.name}</p>
            <h2 className="font-bold text-white">{stat.content}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
