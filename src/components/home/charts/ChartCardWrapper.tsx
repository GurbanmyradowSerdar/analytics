import { IChartCardWrapper } from "../../../types";

const ChartCardWrapper = ({ children, className }: IChartCardWrapper) => {
  return (
    <div
      className={`bg-white px-14 py-6 rounded-3xl drop-shadow-xl ${className} max-lg:px-6 max-lg:py-4 max-xl:px-12 max-xl:py-5`}
    >
      {children}
    </div>
  );
};

export default ChartCardWrapper;
