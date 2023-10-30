import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import MainTitle from "../components/MainTitle";
import CalendarComponent from "../components/charts/CalendarComponent";
import HorizontalChartComponent from "../components/charts/HorizontalChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Automated Reports & Widget Alerts",
    text: "Automated reports are a feature offered by analytics companies that allow businesses to generate and distribute reports automatically. These reports can provide insights on key metrics, performance indicators, and trends.",
    chart: PieChartComponent,
  },
  {
    title: "Fully customizable to address your needs",
    text: "A fully customizable solution is designed to adapt and cater to the unique needs and requirements of a business or individual. It allows users to tailor the features, functionalities, and appearance of the solution according to their specific preferences.",
    chart: HorizontalChartComponent,
  },
  {
    title: "Pre-built Dashboard Templates",
    text: "Pre-built dashboard templates are pre-designed and pre-configured dashboard layouts offered by analytics companies or software providers. These templates serve as a starting point for creating data visualizations and monitoring key metrics.",
    chart: CalendarComponent,
  },
];

const ThirdHomeSection = () => {
  return (
    <section className="bg-[#F8F9FF] third-section pb-96 overflow-hidden max-lg:pb-52 max-xl:pb-72">
      <HorizontalLimiterWrapper className="flex flex-col pt-32 pb-20 gap-28 max-lg:pt-24 max-lg:gap-20 max-xl:pt-28 max-xl:gap-24">
        {cards.map((item, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          return i === 1 ? (
            <div
              key={i}
              className="flex items-center justify-between space-x-5"
            >
              <item.chart className="flex-[0_1_50%]" />
              <motion.div
                ref={ref}
                style={{
                  translateX: isInView ? "0px" : "200px",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s ease-in-out",
                }}
                className="flex flex-col flex-[1_1_50%] max-w-lg gap-5 max-lg:max-w-xs max-xl:max-w-md"
              >
                <MainTitle text={item.title} />
                <p className="text-lg max-lg:text-base">{item.text}</p>
              </motion.div>
            </div>
          ) : (
            <div key={i} className="flex items-center justify-between">
              <motion.div
                ref={ref}
                style={{
                  translateX: isInView ? "0px" : "-200px",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s ease-in-out",
                }}
                className="flex flex-col flex-[1_1_50%] max-w-lg gap-5 max-lg:max-w-xs max-xl:max-w-md"
              >
                <MainTitle text={item.title} />
                <p className="text-lg max-lg:text-base">{item.text}</p>
              </motion.div>
              <item.chart className="flex-[0_1_50%]" />
            </div>
          );
        })}
      </HorizontalLimiterWrapper>
    </section>
  );
};

export default ThirdHomeSection;
