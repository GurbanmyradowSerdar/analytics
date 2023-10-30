export function calculatingResponsiveSize<T>(
  windowWidth: number,
  lg: T,
  xl: T,
  xxl: T
): T {
  if (windowWidth <= 1024) {
    return lg;
  } else if (windowWidth <= 1280) {
    return xl;
  } else {
    return xxl;
  }
}
