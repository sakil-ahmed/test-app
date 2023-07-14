"use client";
import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/index";
import { motion } from "framer-motion";
import Link from "next/link";
import { animationFade } from "../Animation/Motion";
import Card2 from "../Card2/Card2";
import { card } from "@/public/data/CardData";
import { useRouter } from "next/router";

const Project = () => {
  const [isAcitve, setIsActive] = useState<any>("#all");
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Latest Project".split("");
  const router = useRouter();
  useEffect(() => {
    setLetterClass("text-animate-hover");

    setIsActive(router.asPath);
  }, [router.asPath]);
  console.log(router.asPath);

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
          {/*Filter */}
          <div className={"button_container"}>
            <Link href={"#all"}>
              <button className={isAcitve === "/#all" ? "active" : ""}>
                {"All"}
              </button>
            </Link>
            <Link href={"#LandingPage"}>
              <button className={isAcitve === "/#LandingPage" ? "active" : ""}>
                {"Landing Page"}
              </button>
            </Link>
            <Link href={"#E-commerce"}>
              <button className={isAcitve === "/#E-commerce" ? "active" : ""}>
                {"E-commerce"}
              </button>
            </Link>
            <Link href={"#WebApps"}>
              <button className={isAcitve === "/#WebApps" ? "active" : ""}>
                {"Web Apps"}
              </button>
            </Link>
          </div>

          {/*Filter */}
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
