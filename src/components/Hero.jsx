import React from "react";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Image =
  "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/459052611_1287058272703295_2431563723437254643_n.jpg?stp=c0.0.416.416a_dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=-IkISUWSgEUQ7kNvgH65DdT&_nc_ht=scontent.fjsr11-1.fna&oh=00_AYAXE57jK4uTMCtQKh4hjGZ7ykdePZHA-qQzWgxHuOpTYA&oe=66E6144B"

const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hossen Ali
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-3xl text-xxl tracking-tight text-transparent"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Frontend Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Backend Developer",
                  1000,
                  "Mern Stack Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center hover:-translate-y-1 transition hover:scale-110 duration-500 ease-in-out">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Image}
              className="h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
