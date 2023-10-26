import { IHorizontalLimiterWrapper } from "../types";

const HorizontalLimiterWrapper = ({
  children,
  className,
}: IHorizontalLimiterWrapper) => {
  return <div className={`${className} mx-40`}>{children}</div>;
};

export default HorizontalLimiterWrapper;
