import LogoIcon from "icons/logo/logo.svg";
import LogoTextIcon from "icons/logo/logo-text.svg";
import data from "data";

const Header = () => {
  const { navItems } = data;

  return (
    <header className="flex items-center justify-between pt-12">
      <div className="flex items-center gap-36 max-lg:gap-20 max-xl:gap-28">
        <a href="#" className="flex items-center gap-1">
          <img
            src={LogoIcon}
            alt="logo"
            className="w-full h-full object-contain max-lg:w-5 max-xl:w-8 max-2xl:w-10"
          />
          <img
            src={LogoTextIcon}
            alt="logo"
            className="w-full h-full object-contain max-lg:w-24 max-xl:w-28 max-2xl:w-28"
          />
        </a>
        <nav className="flex items-center gap-9 max-lg:gap-4 max-xl:gap-6">
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
      <div className="flex items-center gap-10 max-lg:gap-6 max-xl:gap-8">
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
