import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import MainTitle from "../components/MainTitle";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Monitoring 24/7",
    text: "Monitoring 24/7 is a crucial feature provided by analytics companies to ensure constant surveillance of business operations.",
    image: "/icons/time.svg",
  },
  {
    title: "Widget System",
    text: "A widget system is a framework or platform that allows users to easily add and customize small, self-contained applications.",
    image: "/icons/computer.svg",
  },
  {
    title: "Best Performance",
    text: "Best performance refers to achieving optimal results and efficiency in various aspects of a business or system.",
    image: "/icons/rocket.svg",
  },
];

const SecondHomeSection = () => {
  return (
    <section className="bg-[#F8F9FF] pt-20 max-lg:pt-14">
      <HorizontalLimiterWrapper className="flex flex-col gap-20 max-lg:gap-12">
        <div className="flex flex-col items-center gap-7 text-center max-lg:gap-5">
          <MainTitle text="Main Features" />
          <p className="max-lg:text-sm max-lg:line-clamp-2">
            An analytics company offers a range of services and solutions
            designed to help businesses gain valuable insights from their data.
            These companies specialize in collecting, analyzing, and
            interpreting data to provide actionable intelligence that can drive
            informed decision-making and improve business performance. Data
            Collection and Integration: Analytics companies have expertise in
            collecting data from various sources, including internal systems,
            external databases.
          </p>
        </div>
        <div className="flex gap-32">
          {cards.map((item, i) => {
            return (
              <AnimatedCard
                image={item.image}
                text={item.text}
                title={item.title}
                key={i}
              />
            );
          })}
        </div>
      </HorizontalLimiterWrapper>
    </section>
  );
};

export default SecondHomeSection;

function AnimatedCard(item: { image: string; title: string; text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transition: "all 0.8s ease-in-out",
        translateY: isInView ? "0px" : "20px",
        opacity: isInView ? 1 : 0,
      }}
      className="flex flex-col items-center gap-6 flex-[1_1_0px] text-center max-lg:gap-4"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-14 h-14 max-lg:w-10 max-lg:h-10"
      />
      <h4 className="font-bold text-text-main-color max-lg:text-sm">
        {item.title}
      </h4>
      <p className="max-lg:text-sm">{item.text}</p>
    </motion.div>
  );
}
