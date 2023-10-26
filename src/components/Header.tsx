import { useContext } from "react";
import { AppContext } from "../App";
import { IHeader } from "../types";

const Header = ({ className }: IHeader) => {
  const navItems = useContext(AppContext);
  return (
    <div className={`${className} flex items-center justify-between pt-12`}>
      <div className="flex items-center gap-36">
        <div className="flex items-center gap-1">
          <img src="./icons/logo/logo.svg" alt="logo" />
          <img src="./icons/logo/logo-text.svg" alt="logo" />
        </div>
        <nav className="flex items-center gap-9">
          {navItems.map((item, i) => {
            return (
              <a href="#" key={i} className="text-sm">
                {item}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-10">
        <a href="#" className="text-base">
          Sign in
        </a>
        <button className="text-base px-12 py-2 border border-[#465B95] rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;

// i have background and here two differenet colors and the line that devide them how can i do that job?
