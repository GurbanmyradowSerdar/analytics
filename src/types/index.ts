export interface IClassNameProps {
  className?: string;
}

export interface IChildrenProps extends React.PropsWithChildren {}

export interface IChartCardWrapper extends IClassNameProps {
  children: React.ReactNode;
}
