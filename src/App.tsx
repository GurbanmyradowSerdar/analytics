import { createContext } from "react";
import Footer from "./components/Footer";
import FirstHomeSection from "./components/home/sections/first/FirstHomeSection";
import SecondHomeSection from "./components/home/sections/second/SecondHomeSection";
import ThirdHomeSection from "./components/home/sections/third/ThirdHomeSection";
import FourthHomeSection from "./components/home/sections/fourth/FourthHomeSection";
import Header from "./components/Header";

const navItems: string[] = ["Product", "Pricing Plans", "FAQ", "Blog"];
export const AppContext = createContext<string[]>(navItems);

function App() {
  return (
    <div className="font-Roboto flex flex-col text-text-secondary-color min-h-screen">
      <main className="flex-grow">
        <FirstHomeSection>
          <Header />
        </FirstHomeSection>
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

// ! responsive of lg and xl; lg = 1024; xl = 1280
