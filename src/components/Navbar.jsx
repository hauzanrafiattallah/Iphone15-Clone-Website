import { useState, useEffect, useRef } from "react";
import { appleImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `https://www.apple.com/id/search/${searchQuery}?src=globalnav`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="https://www.apple.com/id/" rel="apple">
            <img src={appleImg} alt="apple_logo" width={15} height={15} />
          </a>
        </div>

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

        <div className="flex items-center gap-3 sm:gap-5 xl:gap-7">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="focus:outline-none"
          >
            <img
              src={searchImg}
              alt="search"
              width={17}
              height={17}
              className="cursor-pointer"
            />
          </button>
          {isSearchOpen && (
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center"
              ref={searchRef}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-b border-gray-500 bg-transparent text-white outline-none"
                placeholder="Telusuri apple.com"
                autoFocus
              />
            </form>
          )}
          <button
            className="xl:hidden block focus:outline-none px-1 transform translate-y-[-3px] text-xl md:text-2xl xl:text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-start p-4 z-50 transition-transform duration-300 ease-in-out">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl p-2 mb-4 self-end"
          >
            &times; {/* Icon for exit button */}
          </button>
          <div className="flex flex-col items-start w-full pl-8 space-y-4">
            {navLists.map((nav) => (
              <a
                key={nav.name}
                href={nav.url}
                className="w-full text-left py-3 text-white hover:text-gray-300 transition-colors duration-200 ease-in-out text-xl md:text-2xl lg:text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
