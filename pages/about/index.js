import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiWordpress,
  SiReact,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaJs />,
          <FaJava />,
          <FaPython />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaHtml5 />,
          <FaReact />,
        ],
      },
      {
        title: "Web Design",
        icons: [
          <FaFigma />,
          <SiHtml5 />,
          <SiCss3 />,
          <SiJavascript />,
          <SiWordpress />,
          <SiReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "Introduction to Computer Science",
        icons: [<FaGit />, <SiPython />, <SiCplusplus />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Foundational C# with - Microsoft",
        stage: "2024 - 2024",
      },
      {
        title: "Front End Development - CSS",
        stage: "2024 - 2024",
      },
      {
        title: "Front End Development - HTML",
        stage: "2024 - 2024",
      },
      {
        title: "Front End Development Libraries",
        stage: "2024 - 2024",
      },
      {
        title: "Harvard University CS50 x Certificate ",
        stage: "2024 - 2024",
      },
      {
        title: "Harvard University CS50 w Certificate ",
        stage: "2024 - 2024",
      },
      {
        title: "Python data sync ",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Wordpress - Tarahan Grad Agency",
        stage: "2023 - 2024",
      },
      {
        title: "Web Developer - Bonyan Pardazesh",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Python - imiazar",
        stage: "2023",
      },
      {
        title: "Web Development - harvard university",
        stage: "2024",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img*/}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[200px] -left-[70px] w-full h-full"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb px-2 xl:px-0"
          >
            1 years ago , I began freelancing as a developer . since then,i've
            done remote work for agencies , counsulted for startups , and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xlmx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experince */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrablod text-accent mb-2">
                  <CountUp start={0} end={4} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leadin-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrablod text-accent mb-2">
                  <CountUp start={0} end={150} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leadin-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrablod text-accent mb-2">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leadin-[1.4] max-w-[100px]">
                  Finished project
                </div>
              </div>
              {/* Award */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrablod text-accent mb-2">
                  <CountUp start={0} end={22} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leadin-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]  "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={
                    "${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0"
                  }
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 item-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 item-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-9">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white ">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
