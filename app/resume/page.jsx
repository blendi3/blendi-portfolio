"use client";

import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Beyond technical expertise, I thrive in collaborative environments, leveraging my extroverted nature to foster teamwork and innovation. I am passionate about problem-solving and staying abreast of industry trends, demonstrating a proactive approach to achieving project goals and delivering high-quality results.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Blendi Ivanja",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+383) 45 414 328",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Email",
      fieldValue: "blendiivanja2@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Albanian",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have gained valuable experience in front-end development through my roles at Pabau Clinic Software and OCA Solutions. My expertise spans HTML, CSS, JavaScript, React, TypeScript, and Next.js, where I specialize in creating intuitive user interfaces and optimizing user experiences.",
  items: [
    {
      company: "Pabau Clinic Software",
      position: "Software Developer",
      duration: "Sep 2023 - Apr 2024",
    },
    {
      company: "OCA Solutions",
      position: "Frontend Developer",
      duration: "Mar 2023 - Sep 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "Pursuing a Bachelor of Science in Computer Science and Engineering at UBT (University for Business and Technology), Kosovo, with coursework emphasizing software development and engineering principles. Completed specialized training in JavaScript Development at ICK and Advanced JavaScript and React.js at Beetroot Academy Kosovo, enhancing skills in front-end web development.",
  items: [
    {
      institution: "University of Bussiness and Technology",
      degree: "Bachelor Degree",
      duration: "2021-2024",
    },
    {
      institution: "ICK",
      degree: "Javascript Course",
      duration: "Jun 2022 - Aug 2022",
    },
    {
      institution: "Beetroot Academy Kosovo",
      degree: "Advanced JavaScript & ReactJs",
      duration: "Nov 2022 - Feb 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "My skill set includes advanced proficiency in React, TypeScript, and Next.js, enabling me to develop responsive and dynamic web applications. I am adept at integrating cutting-edge technologies to deliver scalable solutions that meet client needs effectively.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javasript",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindCss",
    },
    {
      icon: <GrGraphQl />,
      name: "graphql",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="h-full container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName + ":"}
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Resume;
