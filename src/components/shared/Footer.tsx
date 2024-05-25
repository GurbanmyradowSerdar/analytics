import LogoGrayIcon from "icons/logo/logo-gray.svg";
import LogoTextGrayIcon from "icons/logo/logo-text-gray.svg";
import data from "data";
import HorizontalLimiterWrapper from "components/shared/HorizontalLimiterWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const { socialMediaIcons } = data;
  const { navItems } = data;
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false });

  return (
    <footer ref={containerRef}>
      <HorizontalLimiterWrapper className="pb-24 pt-3 mt-24 flex flex-col gap-14 max-lg:gap-10 max-lg:pb-20 max-lg:mt-20">
        <div className="h-[1px] w-full bg-[#2A407C]"></div>
        <div className="flex items-center justify-between">
          <motion.a
            style={{
              transition: `all 0.5s ease-in-out 0.1s`,
              translateY: isInView ? "0px" : "50px",
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0,
            }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: "0.1s",
                delay: 0,
              },
            }}
            href="#"
            className="flex items-center gap-1"
          >
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
          </motion.a>
          <nav className="flex items-center gap-9 max-lg:gap-4">
            {navItems.map((item, i) => {
              return (
                <motion.a
                  style={{
                    transition: `all 0.5s ease-in-out ${i * 0.1}s`,
                    translateY: isInView ? "0px" : "50px",
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0,
                  }}
                  href="#"
                  key={i}
                  className="transition-all duration-300 hover:text-[#c8d0e6] max-lg:text-sm"
                >
                  {item}
                </motion.a>
              );
            })}
          </nav>
          <div className="flex items-center gap-10 max-lg:gap-6">
            {socialMediaIcons.map((item, i) => {
              return (
                <motion.a
                  href="#"
                  key={i}
                  style={{
                    transition: `all 0.5s ease-in-out ${i * 0.1}s`,
                    translateY: isInView ? "0px" : "50px",
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0,
                    rotateZ: "0deg",
                  }}
                  whileHover={{
                    rotateZ: i % 2 === 1 ? "20deg" : "-20deg",
                    scale: 1.5,
                    transition: {
                      duration: "0.1s",
                      delay: 0,
                    },
                  }}
                >
                  <img
                    loading="lazy"
                    src={item}
                    alt="social_media"
                    className="w-6 h-6 max-lg:w-4 max-lg:h-4"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </HorizontalLimiterWrapper>
    </footer>
  );
};

export default Footer;
