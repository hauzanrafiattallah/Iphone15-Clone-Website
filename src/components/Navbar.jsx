import { appleImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    // Navbar Has not added logic
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="https://www.apple.com/id/" rel="apple">
            <img src={appleImg} alt="apple_logo" width={15} height={15} />{" "}
            {/* Logo Apple */}
          </a>
        </div>

        {/* Menu And Hidden on mobile */}
        <div className="hidden xl:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <a
              key={nav.name}
              href={nav.url}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Search And Hamburger Icon*/}
        <div className="flex items-center gap-3 sm:gap-5 xl:gap-7">
          <button className="focus:outline-none">
            <img
              src={searchImg}
              alt="search"
              width={17}
              height={17}
              className="cursor-pointer"
            />
          </button>
          <button className="xl:hidden block focus:outline-none px-1 transform translate-y-[-3px] text-xl md:text-2xl xl:text-3xl">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
