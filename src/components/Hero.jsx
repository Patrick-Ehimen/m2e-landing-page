import { Swift, Apple3, google2 } from "../assets";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <img
        className=" sm:mt-[250px] mt-[120px] px-10 sm:px-10 sm:max-w-3xl max-w-sm"
        alt="Swift blockchain"
        src={Swift}
      />

      <div>
        <p className="flex items-center mx-[50px] sm:mx-[120px] mt-8 text-white text-center font-inter text-lg">
          Ready to energize your life and turn it into earnings? With Move to
          <br className="md:block hidden" />
          Earn, your steps hold real value. Simply walk, run, or exercise to
          <br className="md:block hidden " />
          Each step matters.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col flew-warp sm:mt-10 mt-6 ">
        <img
          src={Apple3}
          alt="apple"
          className="w-[128px] h-[42px] object-contain mr-5 hover:cursor-pointer mb-2"
        />
        <img
          src={google2}
          alt="google-play"
          className="w-[128px] h-[42px] object-contain hover:cursor-pointer"
        />

        {/* gradient start */}
        <div className="absolute z-[1] w-[50%] h-[50%] top-0 left-0 navbar__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
