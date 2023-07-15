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
  const [isAcitve, setIsActive] = useState<any>("/#all");
  const [filterData, setFilterData] = useState<any>(card);
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Latest Project".split("");
  const router = useRouter();
  useEffect(() => {
    setLetterClass("text-animate-hover");

    setIsActive(router.asPath);
  }, [router.asPath]);

  /**
   * Filter Data
   **/
  const FilterData = (category: string) => {
    const data = card.filter((item) => item.Category === category);
    setFilterData(data.length ? data : card);
  };

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
              <button
                onClick={() => FilterData("all")}
                className={
                  isAcitve === "/#all" || isAcitve === "/" ? "active" : ""
                }
              >
                {"All"}
              </button>
            </Link>
            <Link href={"#LandingPage"}>
              <button
                onClick={() => FilterData("LandingPage")}
                className={isAcitve === "/#LandingPage" ? "active" : ""}
              >
                {"Landing Page"}
              </button>
            </Link>
            <Link href={"#E-commerce"}>
              <button
                onClick={() => FilterData("E-commerce")}
                className={isAcitve === "/#E-commerce" ? "active" : ""}
              >
                {"E-commerce"}
              </button>
            </Link>
            <Link href={"#WebApps"}>
              <button
                onClick={() => FilterData("Web Apps")}
                className={isAcitve === "/#WebApps" ? "active" : ""}
              >
                {"Web Apps"}
              </button>
            </Link>
          </div>

          {/*Filter */}
          <motion.div className="card__container">
            {filterData.map((item: any) => {
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
