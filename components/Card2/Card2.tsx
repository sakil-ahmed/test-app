import Image, { StaticImageData } from "next/image";
import React from "react";
import LinkIcon from "@/assets/linkIcon";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import {animationFade} from "@/components/Animation/Motion";

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
        {...animationFade("bottom", 100)}
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
