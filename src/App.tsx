import { createContext, useState } from "react";
import Footer from "./components/Footer";
import FirstHomeSection from "./components/home/sections/FirstHomeSection";
import SecondHomeSection from "./components/home/sections/SecondHomeSection";
import ThirdHomeSection from "./components/home/sections/ThirdHomeSection";
import FourthHomeSection from "./components/home/sections/FourthHomeSection";
import Header from "./components/Header";
import MobilePage from "./components/mobile";

const navItems: string[] = ["Product", "Pricing Plans", "FAQ", "Blog"];
export const AppContext = createContext<string[]>(navItems);

function App() {
  const [windowWidth] = useState(window.innerWidth);

  return windowWidth <= 1020 ? (
    <MobilePage />
  ) : (
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

// ! responsive of lg, xl and 2xl; lg = 1024; xl = 1280; 2xl = 1536;
