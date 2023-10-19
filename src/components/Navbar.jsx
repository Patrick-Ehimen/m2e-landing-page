import { Logo } from "../assets";

const Navbar = () => {
  // return <nav className="fixed bg-white  w-[5/6] h-[50px] ">
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent border border-gray-200 rounded-full shadow-lg px-2 py-3 mx-10 mt-10">
      <div className="container w-[36px] h-[50px]"></div>
      <img src={Logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
