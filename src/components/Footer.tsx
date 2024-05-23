import { IClassName } from "../types";
import HorizontalLimiterWrapper from "./HorizontalLimiterWrapper";
import LogoGrayIcon from "icons/logo/logo-gray.svg";
import LogoTextGrayIcon from "icons/logo/logo-text-gray.svg";
import data from "data";

const Footer = ({ className }: IClassName) => {
  const { socialMediaIcons } = data;
  const { navItems } = data;
  return (
    <footer className={`${className}`}>
      <HorizontalLimiterWrapper className="pb-24 pt-3 mt-24 flex flex-col gap-14 max-lg:gap-10 max-lg:pb-20 max-lg:mt-20">
        <div className="h-[1px] w-full bg-[#2A407C]"></div>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-1">
            <img
              loading="lazy"
              src={LogoGrayIcon}
              alt="logo"
              className="max-lg:w-5 max-lg:object-contain w-full h-full"
            />
            <img
              loading="lazy"
              src={LogoTextGrayIcon}
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
          <div className="flex items-center gap-10 max-lg:gap-6">
            {socialMediaIcons.map((item, i) => {
              return (
                <a
                  href="#"
                  key={i}
                  className="transition-all duration-300 hover:scale-125"
                >
                  <img
                    loading="lazy"
                    src={item}
                    alt="social_media"
                    className="w-6 h-6 max-lg:w-4 max-lg:h-4"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </HorizontalLimiterWrapper>
    </footer>
  );
};

export default Footer;
