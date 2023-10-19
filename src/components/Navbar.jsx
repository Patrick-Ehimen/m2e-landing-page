import { Logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // return <nav className="fixed bg-white  w-[5/6] h-[50px] ">
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[#ffffff0a] bg-[#000000] border border-black rounded-full shadow-lg px-2 py-3 mx-20 mt-10">
      <div className="container w-[36px] h-[35px]">
        <img src={Logo} alt="logo" className="w-[36px] h-[30px] ml-6 my-2" />
      </div>

      <ul></ul>
    </nav>
  );
};

export default Navbar;
