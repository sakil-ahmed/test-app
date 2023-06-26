import React, { useEffect, useState } from "react";
import image from "./../../assets/code-slash.svg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { animationFade } from "../Animation/Motion";
import AnimatedLetters from "../AnimatedLetters";
import { serviceCard } from "@/public/data/CardData";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "Work Interest and What I Can Offer".split("");
  useEffect(() => {
    setLetterClass("text-animate-hover");
    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    serviceTl.from(".gsap_service_item_1", { xPercent: -100 });
    serviceTl.from(".gsap_service_item_2", { yPercent: -100 });
    serviceTl.from(".gsap_service_item_3", { xPercent: 100 });
  }, []);

  return (
    <section className="service section" id="service">
      <div className="content_wrap line">
        <SectionTitle text="Check Services" />
        {/* <motion.h2 {...animationFade("bottom", 100)} className="service_title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={textArrayname}
            idx={15}
          />
        </motion.h2> */}
        <motion.p {...animationFade("bottom", 100)} className="work-interest">
          I have a strong desire to work with companies that leverage
          cutting-edge technologies like React, Node.js, and Typescript. My
          ideal role would be a challenging one that encourages personal
          development through teamwork and collaboration.
        </motion.p>
        {serviceCard.map(({ id, title, description }, i) => {
          return (
            <div
              className={`service_item_container gsap_service_item_${id}`}
              key={i}
            >
              <div className="service_card">
                <div className="service_card_icon">
                  <div className="service_icon_wrapper">
                    <Image
                      src={image}
                      alt="Code Icon"
                      priority={true}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="service-card__content">
                  <h3 className="service_card_title">{title}</h3>
                  <p className="service_card_paragraph">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
