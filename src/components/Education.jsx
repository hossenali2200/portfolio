import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <>
      <div className="education py-20 border-b border-neutral-800 pb-24" id="education">
        <motion.h2
         whileInView={{ opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
        className="text-3xl font-bold text-center text-[#138781] uppercase mb-4">
          Education Details
        </motion.h2>
        <hr className="mx-auto w-40 border-[#138781]" />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2006 - 2010"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >

           <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
           >
           <h3 className="vertical-timeline-element-title text-white">BSc in Chemistry</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">
              Govt. Azizul Hoque University College, Bogura
            </h4>
           </motion.div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2010 - 2011"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >

           <motion.div
            whileInView={{ opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 1.5}}
           >
           <h3 className="vertical-timeline-element-title text-white">MSc in Chemistry</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">
              Sirajganj Govt University College
            </h4>
           </motion.div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >

          <motion.div
           whileInView={{ opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
          >
          <h3 className="vertical-timeline-element-title text-white">MERN Stack Development</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">
              Ostad Skill Development Platform
            </h4>
          </motion.div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Running"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 1.5}}
            >
            <h3 className="vertical-timeline-element-title text-white">FullStack Development</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">
              Programming Hero Platform
            </h4>
            </motion.div>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
