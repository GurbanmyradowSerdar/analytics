import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import data from "data";
import Title from "components/shared/Title";
import HorizontalLimiterWrapper from "components/shared/HorizontalLimiterWrapper";

const FeaturesSection = () => {
  const { sectionsCards: cards } = data;
  return (
    <section className="bg-[#F8F9FF] pt-20 max-lg:pt-14 max-xl:pt-16">
      <HorizontalLimiterWrapper className="flex flex-col gap-20 max-lg:gap-12 max-xl:gap-16">
        <div className="flex flex-col items-center gap-7 text-center max-lg:gap-5 max-xl:gap-7">
          <Title text="Main Features" />
          <p className="line-clamp-2 max-lg:text-sm">
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
        <div className="flex gap-32 max-lg:gap-20 max-xl:gap-28">
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

export default FeaturesSection;

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
        loading="lazy"
        className="w-14 h-14 max-lg:w-10 max-lg:h-10 max-xl:w-12 max-xl:h-12"
      />
      <h4 className="font-bold text-text-main-color max-lg:text-sm">
        {item.title}
      </h4>
      <p className="max-lg:text-sm">{item.text}</p>
    </motion.div>
  );
}
