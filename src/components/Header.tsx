import { useContext } from "react";
import { AppContext } from "../App";
import { IHeader } from "../types";

const Header = ({ className }: IHeader) => {
  const navItems = useContext(AppContext);
  return (
    <header className={`${className} flex items-center justify-between pt-12`}>
      <div className="flex items-center gap-36">
        <a href="#" className="flex items-center gap-1">
          <img src="./icons/logo/logo.svg" alt="logo" />
          <img src="./icons/logo/logo-text.svg" alt="logo" />
        </a>
        <nav className="flex items-center gap-9">
          {navItems.map((item, i) => {
            return (
              <a
                href="#"
                key={i}
                className="transition-all duration-300 hover:text-[#c8d0e6]"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-10">
        <a
          href="#"
          className="text-base transition-all duration-300 hover:text-[#c8d0e6]"
        >
          Sign in
        </a>
        <button className="text-base px-12 py-2 border border-[#465B95] rounded-full duration-300 transition-all hover:bg-white hover:text-text-main-color">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
