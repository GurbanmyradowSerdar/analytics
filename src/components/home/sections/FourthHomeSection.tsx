import { IPricesCard } from "../../../types";
import HorizontalLimiterWrapper from "../../HorizontalLimiterWrapper";
import MainTitle from "../components/MainTitle";
import PricingCard from "../components/PricingCard";

const cards: IPricesCard[] = [
  {
    name: "Starter",
    amountOfUsers: 3,
    price: 29,
  },
  {
    name: "Standard",
    amountOfUsers: 20,
    price: 99,
  },
  {
    name: "Premium",
    amountOfUsers: 200,
    price: 299,
  },
];

const FourthHomeSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-primary-color fourth-section pt-20">
      <HorizontalLimiterWrapper className="flex flex-col gap-20">
        <div className="flex flex-col text-center max-w-5xl mx-auto gap-8">
          <MainTitle text="Pricing plans" className="text-white capitalize" />
          <p className="text-lg">
            Pricing plans are essential for businesses as they determine the
            cost of their products or services, ensuring they can cover expenses
            and generate revenue. These plans can be tailored to meet the
            specific needs of customers.
          </p>
        </div>
        <div className="flex justify-between">
          {cards.map((item, i) => {
            return (
              <PricingCard
                key={i}
                amountOfUsers={item.amountOfUsers}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </HorizontalLimiterWrapper>
      {children}
    </section>
  );
};
export default FourthHomeSection;
