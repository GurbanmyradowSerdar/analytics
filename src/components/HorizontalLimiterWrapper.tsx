import { IHorizontalLimiterWrapper } from "../types";

const HorizontalLimiterWrapper = ({
  children,
  className,
}: IHorizontalLimiterWrapper) => {
  return (
    <div
      className={`${className} mx-40 max-lg:mx-20 max-xl:mx-28 max-2xl:mx-36`}
    >
      {children}
    </div>
  );
};

export default HorizontalLimiterWrapper;
