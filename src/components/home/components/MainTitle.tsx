import { IMainTitle } from "../../../types";

const MainTitle = ({ text, className }: IMainTitle) => {
  return (
    <p
      className={`${className} text-text-main-color text-[40px] font-bold max-lg:text-2xl max-xl:text-4xl`}
    >
      {text}
    </p>
  );
};

export default MainTitle;
