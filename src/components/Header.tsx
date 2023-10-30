import { useContext } from "react";
import { AppContext } from "../App";
import { IHeader } from "../types";

const Header = ({ className }: IHeader) => {
  const navItems = useContext(AppContext);
  return (
    <header className={`${className} flex items-center justify-between pt-12`}>
      <div className="flex items-center gap-36 max-lg:gap-20">
        <a href="#" className="flex items-center gap-1">
          <img
            src="./icons/logo/logo.svg"
            alt="logo"
            className="max-lg:w-5 max-lg:object-contain w-full h-full"
          />
          <img
            src="./icons/logo/logo-text.svg"
            alt="logo"
            className="max-lg:w-24 max-lg:object-contain w-full h-full"
          />
        </a>
        <nav className="flex items-center gap-9 max-lg:gap-4">
          {navItems.map((item, i) => {
            return (
              <a
                href="#"
                key={i}
                className="transition-all duration-300 hover:text-[#c8d0e6] max-lg:text-sm"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-10 max-lg:gap-6">
        <a
          href="#"
          className="text-base transition-all duration-300 hover:text-[#c8d0e6] max-lg:text-sm"
        >
          Sign in
        </a>
        <button
          className="text-base px-12 py-2 border border-[#465B95] rounded-full duration-300 transition-all hover:bg-white hover:text-text-main-color
        max-lg:text-sm max-lg:px-7"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
