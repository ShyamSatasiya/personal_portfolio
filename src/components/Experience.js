import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position} &nbsp;{" "}
          <a
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>{" "}
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 dark:bg-light w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Full stack developer"}
            company={"Ashutec Solutions"}
            companyLink={"https://www.ashutec.com/"}
            time={"May 2022- Jun 2023"}
            address={"Remote"}
            work={
              "Significantly contributed to web app development, specializing in TypeScript, NodeJS. Integrated real-time communication using WebSocket. Engineered GraphQL services with JWT, OAuth, and caching. Utilized React libraries for enhanced performance which improved app responsiveness and user satisfaction."
            }
          />

          <Details
            position={"Front end developer"}
            company={"Ashutec Solutions"}
            companyLink={"https://www.ashutec.com/"}
            time={"Dec 2021-Apr 2022"}
            address={"Ahmedabad, India"}
            work={
              "Contributed to custom CRM development, improving client management and increasing productivity. Upgraded CRM for efficient client data storage and access. Designed user interfaces enhancing user experience."
            }
          />

          <Details
            position={"Web developer intern"}
            company={"C-Dac Solutions"}
            companyLink={"https://www.cdac.in/"}
            time={"Apr 2020- Sept 2020"}
            address={"Ahmedabad, India"}
            work={
              "I actively contributed to the development of innovative web solutions. I worked on diverse projects aimed at enhancing user experiences. This hands-on experience allowed me to strengthen my web development skills and gain valuable insights into the industry's best practices."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
