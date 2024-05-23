import PricingCard from "components/sections/pricing-section/PricingCard";
import HorizontalLimiterWrapper from "components/shared/HorizontalLimiterWrapper";
import Title from "components/shared/Title";
import data from "data";

const PricingSection = ({ children }: { children: React.ReactNode }) => {
  const { priceCards: cards } = data;
  return (
    <section className="bg-primary-color fourth-section pt-20 max-lg:pt-12">
      <HorizontalLimiterWrapper className="flex flex-col gap-20 max-lg:gap-12">
        <div className="flex flex-col text-center max-w-5xl mx-auto gap-8 max-lg:gap-5">
          <Title text="Pricing plans" className="text-white capitalize" />
          <p className="text-lg line-clamp-2 max-lg:text-base">
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
export default PricingSection;
