import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";

const FirstHomeSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-[900px] bg-primary-color first-section relative overflow-hidden">
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
