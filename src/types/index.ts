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
