import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import MainTitle from "../components/MainTitle";

const cards = [
  {
    title: "Automated Reports & Widget Alerts",
    text: "Automated reports are a feature offered by analytics companies that allow businesses to generate and distribute reports automatically. These reports can provide insights on key metrics, performance indicators, and trends.",
  },
  {
    title: "Fully customizable to address your needs",
    text: "A fully customizable solution is designed to adapt and cater to the unique needs and requirements of a business or individual. It allows users to tailor the features, functionalities, and appearance of the solution according to their specific preferences.",
  },
  {
    title: "Pre-built Dashboard Templates",
    text: "Pre-built dashboard templates are pre-designed and pre-configured dashboard layouts offered by analytics companies or software providers. These templates serve as a starting point for creating data visualizations and monitoring key metrics.",
  },
];

const ThirdHomeSection = () => {
  return (
    <div className="bg-[#F8F9FF]">
      <HorizontalLimiterWrapper className="flex flex-col pt-32 pb-20 gap-28">
        {cards.map((item, i) => {
          return i === 1 ? (
            <div key={i} className="flex items-center justify-between">
              <div className="w-[500px] h-[500px] bg-gray-500 flex-[0_1_50%]"></div>
              <div className="flex flex-col flex-[1_1_50%] max-w-lg gap-5">
                <MainTitle text={item.title} />
                <p className="text-lg">{item.text}</p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex items-center justify-between">
              <div className="flex flex-col flex-[1_1_50%] max-w-lg gap-5">
                <MainTitle text={item.title} />
                <p className="text-lg">{item.text}</p>
              </div>
              <div className="w-[500px] h-[500px] bg-gray-500 flex-[0_1_50%]"></div>
            </div>
          );
        })}
      </HorizontalLimiterWrapper>
    </div>
  );
};

export default ThirdHomeSection;
