"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/my_resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-4">
              Hey there, I'm <br />
              <span className="text-accent whitespace-nowrap">
                Blendi Ivanja
              </span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80 leading-relaxed">
              I specialize in crafting user-friendly and visually stunning web
              experiences. With expertise in HTML, CSS, JavaScript, and React
              (including Next.js), I build dynamic websites and applications
              that prioritize both aesthetics and functionality.
            </p>
            <p className="max-w-[500px] mb-9 text-white/80 leading-relaxed">
              Utilizing TypeScript to enhance code quality, I stay at the
              forefront of web development trends and continuously strive to
              elevate the user experience. Beyond coding, I am passionate about
              traveling and football, always seeking inspiration from the world
              around me.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleResumeDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
