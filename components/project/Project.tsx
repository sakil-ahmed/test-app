import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/index";
import { motion } from "framer-motion";
import Link from "next/link";
import { animationFade } from "../Animation/Motion";
import Card2 from "../Card2/Card2";
import { card } from "@/public/data/CardData";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Latest Project".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row line">
          <motion.h2 {...animationFade("bottom", 100)} className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </motion.h2>
          <motion.div className="card__container">
            {card.map((item) => {
              return <Card2 key={item.id} item={item} />;
            })}
          </motion.div>
          <div className="project__btns">
            <Link href={"#work"}>LOAD MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
