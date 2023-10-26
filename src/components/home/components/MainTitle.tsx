import { IMainTitle } from "../../../types";

const MainTitle = ({ text, className }: IMainTitle) => {
  return (
    <h2 className={`${className} text-text-main-color text-[40px] font-bold`}>
      {text}
    </h2>
  );
};

export default MainTitle;
