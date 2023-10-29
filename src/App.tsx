import { createContext } from "react";
import Footer from "./components/Footer";
import FirstHomeSection from "./components/home/sections/FirstHomeSection";
import SecondHomeSection from "./components/home/sections/SecondHomeSection";
import ThirdHomeSection from "./components/home/sections/ThirdHomeSection";
import FourthHomeSection from "./components/home/sections/FourthHomeSection";

const navItems: string[] = ["Product", "Pricing Plans", "FAQ", "Blog"];
export const AppContext = createContext<string[]>(navItems);

function App() {
  return (
    <div className="font-Roboto flex flex-col text-text-secondary-color min-h-screen">
      <main className="flex-grow">
        <FirstHomeSection />
        <SecondHomeSection />
        <ThirdHomeSection />
      </main>
      <FourthHomeSection>
        <Footer navItems={navItems} />
      </FourthHomeSection>
    </div>
  );
}

export default App;
