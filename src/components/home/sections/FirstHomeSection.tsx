import { useRef } from "react";
import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import { motion, useInView } from "framer-motion";
import { calculatingResponsiveSize } from "../../../utils";
import useWindowWidth from "../../../utils/useWindowWidth";
import ChartImage from "images/chart-1.webp";
import ChartImage1 from "images/chart-2.webp";

const FirstHomeSection = ({ children }: { children: React.ReactNode }) => {
  const windowWidth = useWindowWidth();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, {
    once: true,
  });
  return (
    <section className="min-h-screen bg-primary-color first-section relative overflow-hidden">
      <motion.img
        ref={ref}
        style={{
          position: "absolute",
          top: "38vh",
          right: isInView
            ? calculatingResponsiveSize<string>(
                windowWidth,
                "30vw",
                "28vw",
                "28vw"
              )
            : "-10vw",
          width: calculatingResponsiveSize<string>(
            windowWidth,
            "30vw",
            "25vw",
            "20vw"
          ),
          objectFit: "contain",
          zIndex: 10,
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out",
        }}
        src={ChartImage}
        alt="chart"
      />
      <motion.img
        ref={ref1}
        style={{
          position: "absolute",
          top: "21vh",
          right: isInView1
            ? calculatingResponsiveSize<string>(
                windowWidth,
                "-8vw",
                "-10vw",
                "-10vw"
              )
            : "2vw",
          opacity: isInView1 ? 1 : 0,
          width: calculatingResponsiveSize<string>(
            windowWidth,
            "60vw",
            "55vw",
            "50vw"
          ),
          objectFit: "contain",
          transition: "all 1s ease-in-out",
        }}
        src={ChartImage1}
        alt="chart"
      />

      <HorizontalLimiterWrapper className="flex flex-col gap-40 max-lg:gap-32 max-xl:gap-36 max-2xl:gap-28">
        {children}
        <div className="flex flex-col items-start gap-12 max-w-lg max-lg:gap-8 max-lg:max-w-xs max-xl:max-w-sm">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl leading-[60px] font-bold max-lg:text-3xl max-xl:text-4xl">
              Monitor your business on real-time dashboard
            </h1>
            <h4 className="text-lg max-lg:text-sm max-xl:text-base">
              Monitoring your business on a real-time dashboard is an essential
              practice for any successful entrepreneur or business owner.
            </h4>
          </div>
          <button
            className="bg-secondary-color px-20 py-4 rounded-full text-white transition-all duration-300 shadow-2xl shadow-secondary-color/30 hover:bg-secondary-color/90
          max-lg:text-sm max-lg:px-10 max-lg:py-2 max-xl:text-base max-xl:px-16 max-xl:py-3"
          >
            Try for free
          </button>
        </div>
      </HorizontalLimiterWrapper>
    </section>
  );
};

export default FirstHomeSection;
