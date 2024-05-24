import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Iprops {
  image: string;
  title: string;
  text: string;
}

function AnimatedCard(item: Iprops) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        transition: "all 0.8s ease-in-out",
        translateY: isInView ? "0px" : "20px",
        opacity: isInView ? 1 : 0,
      }}
      className="flex flex-col items-center gap-6 flex-[1_1_0px] text-center max-lg:gap-4"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-14 h-14 max-lg:w-10 max-lg:h-10 max-xl:w-12 max-xl:h-12"
      />
      <h4 className="font-bold text-text-main-color max-lg:text-sm">
        {item.title}
      </h4>
      <p className="max-lg:text-sm">{item.text}</p>
    </motion.div>
  );
}

export default AnimatedCard;
