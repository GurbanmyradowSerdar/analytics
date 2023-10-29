import { IPricesCard } from "../../../types";
import MainTitle from "./MainTitle";

const PricingCard = ({ amountOfUsers, name, price }: IPricesCard) => {
  return (
    <div className="flex flex-col bg-[#11214E] px-14 py-12 rounded-3xl gap-12 flex-[0_1_25%] group hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-xl">
      <div className="flex flex-col text-center">
        <MainTitle
          text={name}
          className="text-3xl text-white group-hover:text-text-main-color transition-colors duration-300"
        />
        <p className="text-lg">up to {amountOfUsers} users</p>
      </div>
      <div className="w-full h-[1px] bg-[#2A407C] transition-colors duration-300 group-hover:bg-[#D3D9E9]"></div>
      <div className="flex flex-col text-center justify-center items-center gap-1">
        <h3 className="text-3xl text-white font-bold flex items-end transition-colors duration-300 group-hover:text-text-main-color">
          $
          <MainTitle
            text={price.toString()}
            className="text-6xl text-white transition-colors duration-300 group-hover:text-text-main-color"
          />
        </h3>
        <p>per month</p>
      </div>
      <button className="bg-transparent rounded-full px-20 py-4 border text-white border-[#2A407C] transition-colors duration-300 group-hover:bg-secondary-color group-hover:border-secondary-color">
        Order
      </button>
    </div>
  );
};

export default PricingCard;
