import { Swift } from "../assets";

const Hero = () => {
  return (
    <div className="flex justify-center items-start">
      <img
        className="flex md:mt-[250px] mt-[200px] md:w-1/2 w-3/6"
        alt="Swift blockchain"
        src={Swift}
      />
      <div>
        <p>
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run, or exercise to
          earn. Each step matters.
        </p>
      </div>
    </div>
  );
};

export default Hero;
