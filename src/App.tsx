import { createContext } from "react";
import Footer from "./components/Footer";
import FirstHomeSection from "./components/home/sections/FirstHomeSection";
import SecondHomeSection from "./components/home/sections/SecondHomeSection";
import ThirdHomeSection from "./components/home/sections/ThirdHomeSection";

const navItems: string[] = ["Product", "Pricing Plans", "FAQ", "Blog"];
export const AppContext = createContext<string[]>(navItems);

function App() {
  return (
    <div className="font-Roboto flex flex-col text-text-secondary-color min-h-screen">
      <main className="flex-grow ">
        <FirstHomeSection />
        <SecondHomeSection />
        <ThirdHomeSection />
      </main>
      <Footer navItems={navItems} />
    </div>
  );
}

export default App;

{
  // ! the ways how to import those things
  // import reactLogo from "./assets/react.svg";
  // import viteLogo from "/vite.svg";
  // import "./App.css";
}

// ! libs need to use in this case

// ? some chart lib; framer-motion
