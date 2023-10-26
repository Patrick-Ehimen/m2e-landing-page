import { clients } from "../constants";

const HeroImg = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-8">
      <div className="container flex flex-col items-center">
        <div className="flex flex-wrap justify-center hover:scale z-10">
          {clients.slice(0, 6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-20 h-20 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-1 sm:m-2 hover:scale-105 cursor-pointer"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain w-1/2"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full max-w-4xl z-10">
          {clients.slice(6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-20 h-20 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-1 sm:m-2 hover:scale-105 cursor-pointer"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain w-1/2"
              />
            </div>
          ))}
        </div>
        <div className="absolute z-0 w-[40%] h-[35%] bottom-0 hero__gradient" />
      </div>
    </section>
  );
};

export default HeroImg;
