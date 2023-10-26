import Header from "../../Header";
import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import "../../../index.css";

const FirstHomeSection = () => {
  return (
    <div className="min-h-screen bg-primary-color first-section relative overflow-hidden">
      <img
        src="/images/chart-1.png"
        alt="chart"
        className="absolute top-[32%] right-[30%] w-[500px] object-contain z-10 "
      />
      <img
        src="/images/chart-2.png"
        alt="chart"
        className="absolute w-[1100px] object-contain top-[15%] -right-40"
      />

      <HorizontalLimiterWrapper className="flex flex-col gap-40">
        <Header />
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
          <button className="bg-secondary-color px-20 py-4 rounded-full text-white">
            Try for free
          </button>
        </div>
      </HorizontalLimiterWrapper>
    </div>
  );
};

export default FirstHomeSection;
