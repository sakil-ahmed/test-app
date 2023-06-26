import Image, { StaticImageData } from "next/image";
import React from "react";
import LinkIcon from "@/assets/linkIcon";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

interface item {
  item: {
    id: number;
    img: StaticImageData;
    subTitle: string;
    liveLink: string;
    repoLink: string;
  };
}

const Card2 = ({ item: { id, img, liveLink, repoLink, subTitle } }: item) => {
  return (
    <div className="root_card">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        // @ts-ignore
        transition={{
          type: "spring",
          Bounce: 0.25,
          duration: 1,
        }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="card"
      >
        <div className="card_top">
          <Image src={img} alt="Project Thumbnail" priority={true} />
          <div className="card_links">
            <a href={repoLink} className="card_link" target="_blank">
              <AiFillGithub color="#000" />
            </a>
            <a href={liveLink} className="card_link" target="_blank">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div className="card_bottom">
          <h3 className="card_title">{subTitle}</h3>
          <h5 className="card_description">UI/UX Sample design mockup</h5>
        </div>
      </motion.div>
    </div>
  );
};

export default Card2;
