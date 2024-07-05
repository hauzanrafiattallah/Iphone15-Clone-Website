import { useState } from "react";
import { appleImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="https://www.apple.com/id/" rel="apple">
            <img src={appleImg} alt="apple_logo" width={15} height={15} />
          </a>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
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

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          <img
            src={searchImg}
            alt="search"
            width={17}
            height={17}
            className="cursor-pointer"
          />
          <button
            className="lg:hidden block focus:outline-none px-1 transform translate-y-[-3px]  text-xl md:text-2xl lg:text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black absolute top-16 left-0 right-0 z-50">
          {navLists.map((nav) => (
            <a
              key={nav.name}
              href={nav.url}
              className="w-full text-center py-2 border-b border-gray-200 text-gray hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
