// ! using tailwind css's classnames purposes
export interface IClassName {
  className?: string;
}

// ! footer
export interface IFooter extends IClassName {
  navItems: string[];
}

// ! header
export interface IHeader extends IClassName {}

// ! horizontal limiter wrapper
export interface IHorizontalLimiterWrapper extends IClassName {
  children: React.ReactNode;
}

// ! main title component in home page
export interface IMainTitle extends IClassName {
  text: string;
}

// ! charts card wrapper
export interface IChartCardWrapper extends IClassName {
  children: React.ReactNode;
  // direction: "fromRight" | "fromLeft";
}

// ! Pricing cards interface in fourth home section
export interface IPricesCard extends IClassName {
  name: string;
  amountOfUsers: number;
  price: number;
}
