import data from "data";
import Title from "components/shared/Title";
import HorizontalLimiterWrapper from "components/shared/HorizontalLimiterWrapper";
import AnimatedCard from "components/sections/features-section/AnimatedCard";

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
          {cards.map((item, i) => (
            <AnimatedCard {...item} key={i} />
          ))}
        </div>
      </HorizontalLimiterWrapper>
    </section>
  );
};

export default FeaturesSection;
