import Title from "components/shared/Title";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {
  name: string;
  amountOfUsers: number;
  price: number;
}

const PricingCard = ({ amountOfUsers, name, price }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transition: "all 0.3s ease-in-out 0.3s",
        translateY: isInView ? "0px" : "20px",
        opacity: isInView ? 1 : 0,
      }}
      className="flex flex-col bg-[#11214E] px-14 py-12 rounded-3xl gap-12 flex-[0_1_25%] group hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-xl
      max-lg:gap-7 max-xl:px-8 max-xl:py-7"
    >
      <div className="flex flex-col text-center">
        <Title
          text={name}
          className="text-3xl text-white group-hover:text-text-main-color transition-colors duration-300"
        />
        <p className="text-lg max-lg:text-base">up to {amountOfUsers} users</p>
      </div>
      <div className="w-full h-[1px] bg-[#2A407C] transition-colors duration-300 group-hover:bg-[#D3D9E9]"></div>
      <div className="flex flex-col text-center justify-center items-center gap-1">
        <h3
          className="text-3xl text-white font-bold flex items-end transition-colors duration-300 group-hover:text-text-main-color
        max-lg:text-xl"
        >
          $
          <Title
            text={price.toString()}
            className="text-6xl text-white transition-colors duration-300 group-hover:text-text-main-color"
          />
        </h3>
        <p className="max-lg:text-sm">per month</p>
      </div>
      <button
        className="bg-transparent rounded-full px-20 py-4 border text-white border-[#2A407C] transition-colors duration-300 group-hover:bg-secondary-color group-hover:border-secondary-color
      max-lg:text-sm max-lg:px-12 max-lg:py-2 max-xl:px-16 max-xl:py-3"
      >
        Order
      </button>
    </motion.div>
  );
};

export default PricingCard;
