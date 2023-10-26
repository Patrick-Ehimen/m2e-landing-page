import { clients } from "../constants";

const HeroImg = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-8">
      <div className="container flex flex-col items-center">
        <div className="flex flex-wrap justify-center ">
          {clients.slice(0, 6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-20 h-20 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain w-1/2"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full max-w-4xl">
          {clients.slice(6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-20 h-20 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain w-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
