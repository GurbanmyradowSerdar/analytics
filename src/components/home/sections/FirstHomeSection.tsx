import { useRef } from "react";
import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import { motion, useInView } from "framer-motion";

const FirstHomeSection = ({ children }: { children: React.ReactNode }) => {
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
          top: "32%",
          right: isInView ? "30%" : "-10%",
          width: "500px",
          objectFit: "contain",
          zIndex: 10,
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out",
        }}
        src="/images/chart-1.png"
        alt="chart"
      />
      <motion.img
        ref={ref1}
        style={{
          position: "absolute",
          top: "15%",
          right: isInView1 ? "-8%" : "2%",
          opacity: isInView1 ? 1 : 0,
          width: "1100px",
          objectFit: "contain",
          transition: "all 1s ease-in-out",
        }}
        src="/images/chart-2.png"
        alt="chart"
      />

      <HorizontalLimiterWrapper className="flex flex-col gap-40">
        {children}
        <div className="flex flex-col items-start gap-12 max-w-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl leading-[60px] font-bold">
              Monitor your business on real-time dashboard
            </h1>
            <h4 className="text-lg">
              Monitoring your business on a real-time dashboard is an essential
              practice for any successful entrepreneur or business owner.
            </h4>
          </div>
          <button className="bg-secondary-color px-20 py-4 rounded-full text-white transition-all duration-300 shadow-2xl shadow-secondary-color/30 hover:bg-secondary-color/90">
            Try for free
          </button>
        </div>
      </HorizontalLimiterWrapper>
    </section>
  );
};

export default FirstHomeSection;
