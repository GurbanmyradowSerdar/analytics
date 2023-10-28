import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import MainTitle from "../components/MainTitle";

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
    <div className="bg-[#F8F9FF] pt-10">
      <HorizontalLimiterWrapper className="flex flex-col gap-20">
        <div className="flex flex-col items-center gap-7 text-center">
          <MainTitle text="Main Features" />
          <p>
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
              <div
                key={i}
                className="flex flex-col items-center gap-6 flex-[1_1_0px] text-center"
              >
                <img src={item.image} alt={item.title} className="w-14 h-14" />
                <h4 className="font-bold text-text-main-color">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </HorizontalLimiterWrapper>
    </div>
  );
};

export default SecondHomeSection;