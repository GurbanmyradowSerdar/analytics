import useWindowWidth from "./useWindowWidth";

export function calculatingResponsiveSize<T>(lg: T, xl: T, xxl: T): T {
  const windowWidth = useWindowWidth();

  if (windowWidth <= 1024) {
    return lg;
  } else if (windowWidth <= 1280) {
    return xl;
  } else {
    return xxl;
  }
}
