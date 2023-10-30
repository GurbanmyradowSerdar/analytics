import { useState, useEffect } from "react";

const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        console.log("resize finished");
      });
    };
  }, []);

  return width;
};

export default useWindowWidth;
