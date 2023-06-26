import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";
import image from "./../../assets/image.webp";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { animationFade } from "./../Animation/Motion";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionTitle text="About Me" />
        <div className="row line">
          <motion.div {...animationFade("left", -100)} className="about_image">
            <Image src={image} alt="Sakil Ahmed" priority={true} />
          </motion.div>
          <div className="about_content">
            <motion.h2 {...animationFade("bottom", 100)} className="title">
              Welcome to Sakil, Best Web Development Services
            </motion.h2>
            {/* <motion.h5 {...animationFade("bottom", 100)} className="sub_title">
              I have 1.5+ years of experiences in web Development for give you
              better services.
            </motion.h5> */}
            <motion.p {...animationFade("bottom", 100)} className="description">
              As a front-end web developer, I am responsible for designing and
              implementing the user interface of websites and web applications.
              I have expertise in HTML, CSS, JavaScript, and javascript
              libraries such as react js. I use these technologies to create
              visually appealing and responsive web pages that provide a great
              user experience.
            </motion.p>
            {/* <motion.div
              {...animationFade("bottom", 100)}
              className="counter_container"
            >
              <p className="">
                <CountUp
                  className="project_counter"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  end={20}
                  suffix="+"
                />
                <span>Projects Completed</span>
              </p>
              <p className="">
                <CountUp
                  className="client_counter"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  end={10}
                  suffix="+"
                />
                <span>Happy clients</span>
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
