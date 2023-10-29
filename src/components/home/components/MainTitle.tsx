import { IMainTitle } from "../../../types";

const MainTitle = ({ text, className }: IMainTitle) => {
  return (
    <p className={`${className} text-text-main-color text-[40px] font-bold`}>
      {text}
    </p>
  );
};

export default MainTitle;
