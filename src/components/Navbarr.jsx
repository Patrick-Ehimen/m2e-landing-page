import { Logo } from "../assets";
import { navLinks } from "../constants";

const Navbarr = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[#ffffff0a] bg-[#000000] border border-black rounded-full shadow-lg px-2 py-3 mx-20 mt-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center">
          <img src={Logo} alt="logo" className="w-[36px] h-[30px] ml-6 my-2" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-primary bg-[#D9D9D9C9] hover:bg-[#d9d9d9df]   font-bold font-inter rounded-full text-sm px-4 py-2 text-center mr-3 sm:flex hidden"
          >
            Launch App
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col mt-3 font-medium  text-[15px] md:flex-row md:space-x-8 text-white font-inter text-lg my-2 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 pl-3 pr-4 text-white hover:bg-[#d9d9d9df] md:hover:bg-transparent  md:p-0   "
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
