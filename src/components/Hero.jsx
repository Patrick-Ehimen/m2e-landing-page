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

      <div className="flex flex-row flew-warp sm:mt-10 mt-6">
        <img
          src={Apple3}
          alt="apple"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google2}
          alt="google-play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />

        {/* gradient start */}
        <div className="fixed  w-[50%] h-[50%] top-0 left-0 navbar__gradient" />
        <div className="absolute  w-[40%] h-[35%] hero__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
