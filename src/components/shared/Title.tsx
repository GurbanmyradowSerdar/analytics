import { IClassNameProps } from "types";
import { twMerge as tw } from "tailwind-merge";
interface IProps extends IClassNameProps {
  text: string;
}

const Title = ({ text, className }: IProps) => {
  return (
    <p
      className={tw(
        "text-text-main-color text-[40px] font-bold max-lg:text-2xl max-xl:text-4xl",
        className
      )}
    >
      {text}
    </p>
  );
};

export default Title;
