import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters/index";
import Image, { StaticImageData } from "next/image";
import { animationFade } from "../Animation/Motion";
import { skillsData } from "@/public/data/CardData";

interface techdata {
  id: number;
  img: StaticImageData;
  text: string;
}

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "Technologies".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row line">
          <motion.h2 {...animationFade("bottom", 100)} className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </motion.h2>
        </div>
        <div className="technologies_container">
          {skillsData.map(({ id, img, text }: techdata) => {
            return (
              <div key={id} className="root_tech_item">
                <motion.div
                  key={id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  // @ts-ignore
                  transition={{
                    type: "spring",
                    Bounce: 0.25,
                    duration: 1,
                    delay: 0.1 * id,
                  }}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="tech_item"
                >
                  <Image
                    src={img}
                    alt="React"
                    priority={true}
                    className="tech_item_img"
                  />
                  <span className="tech_item_text">{text}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
