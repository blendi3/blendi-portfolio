"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    catergory: "Banking App",
    title: "project 1",
    description:
      "I developed a robust Banking App demonstrating my expertise in modern web development. It features secure user authentication, account management for multiple bank accounts, transaction capabilities (deposits, withdrawals, transfers), real-time balance updates, and detailed transaction history. Built with Next.js, React, TailwindCSS, and integrated with Plaid for banking data.",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Appwrite" },
      { name: "Sentry" },
      { name: "Plaid" },
    ],
    image: "/icons/Payzen3.jpg",
    live: "https://payzen-bank.vercel.app",
    github: "https://github.com/blendi3/banking",
  },
  {
    num: "02",
    catergory: "Task Managment App",
    title: "project 2",
    description:
      "I created a user-friendly Task Management App with React, allowing seamless task creation, updating, and deletion. Tasks can be categorized by importance and completion status. It features secure user authentication via Firebase and utilizes Ant Design for its UI components.",
    stack: [
      { name: "React.js" },
      { name: "Typescript" },
      { name: "Ant Design" },
      { name: "Firebase Auth" },
    ],
    image: "/icons/taskManagment.jpg",
    live: "https://taskflowmanagement.netlify.app/",
    github: "https://github.com/blendi3/task-management-app",
  },
  {
    num: "03",
    catergory: "Patient Management App",
    title: "project 3",
    description:
      "A streamlined patient management app that simplifies scheduling, tracking, and managing patient information efficiently.",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Appwrite" },
      { name: "TailwindCSS" },
      { name: "ShadCn" },
    ],
    image: "/icons/patient-pulse.jpg",
    live: "https://patient-pulse.vercel.app/",
    github: "https://github.com/blendi3/PatientPulse",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-9xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.catergory}
              </h2>
              <p className="text-white/60">
                {project.num === "03" ? (
                  <>
                    A streamlined patient management app that simplifies
                    scheduling, tracking, and managing patient information
                    efficiently.
                    <span className="block mt-2 bg-yellow-100 text-black p-2 rounded-md">
                      Password for Admin: 123456
                    </span>
                  </>
                ) : (
                  project.description
                )}
              </p>

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[350px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image src={project.image} fill alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full
              justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex
                justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
