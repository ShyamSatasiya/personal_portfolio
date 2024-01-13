import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold  dark:bg-light dark:text-dark rounded-full font-semibold absolute bg-dark text-light py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 1.5 }}
      //   viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center  lg:p-6 md:p-4 xs:text-xs xs:p-2 justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web{" "}
        </motion.div>
        <Skill name="React" x="-20vw" y="-2vw" />
        <Skill name="Next" x="-5vw" y="-10vw" />
        <Skill name="Gatsby" x="20vw" y="6vw" />
        <Skill name="Tailwind" x="0vw" y="11vw" />
        <Skill name="Node" x="-20vw" y="-15vw" />
        <Skill name="Express" x="15vw" y="-12vw" />
        <Skill name="MongoDB" x="32vw" y="-5vw" />
        <Skill name="Postgres" x="0vw" y="-19vw" />
        <Skill name="GraphQL" x="-25vw" y="18vw" />
        <Skill name="Prisma" x="18vw" y="18vw" />
        <Skill name="AWS" x="-32vw" y="0vw" />
        <Skill name="Git" x="0vw" y="22vw" />
        <Skill name="Figma" x="-20vw" y="10vw" />
      </div>
    </>
  );
};
export default Skills;
