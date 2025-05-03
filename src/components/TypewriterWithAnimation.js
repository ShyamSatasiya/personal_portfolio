import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const TypewriterWithAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full flex justify-center items-center text-center py-6"
    >
      <h1 className="text-5xl font-bold text-dark dark:text-light">
        <Typewriter
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
          words={[
            "Hi, I'm Shyam Satasiya.",
            "Empowering Ideas with Precision Coding and Intuitive Design.",
          ]}
        />
      </h1>
    </motion.div>
  );
};

export default TypewriterWithAnimation;
