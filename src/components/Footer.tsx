import { IFooter } from "../types";
import HorizontalLimiterWrapper from "./HorizontalLimiterWrapper";

const socialMediaItems: string[] = [
  "./icons/social_medias/facebook.svg",
  "./icons/social_medias/twitter.svg",
  "./icons/social_medias/instagram.svg",
];

const Footer = ({ navItems, className }: IFooter) => {
  return (
    <footer className={`${className}`}>
      <HorizontalLimiterWrapper className="pb-24 pt-3 mt-24 flex flex-col gap-14">
        <div className="h-[1px] w-full bg-[#2A407C]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="./icons/logo/logo-gray.svg" alt="logo" />
            <img src="./icons/logo/logo-text-gray.svg" alt="logo" />
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
          <div className="flex items-center gap-10">
            {socialMediaItems.map((item, i) => {
              return (
                <a href="#" key={i}>
                  <img src={item} alt="social_media" />
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
