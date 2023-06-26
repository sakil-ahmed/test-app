import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { socialLinks } from "@/public/data/CardData";

const Footer = () => {
  return (
    <footer className="footer line">
      <div className="container">
        <div className="row">
          <div className="footer_bottom">
            <div className="footer__social__icons">
              {socialLinks.map((item) => {
                return (
                  <a key={item.id} href={item.link} target="_blank">
                    <span>{item.icon}</span>
                    <span>{item.icon}</span>
                  </a>
                );
              })}
            </div>
            <div className="copyright__text">
              <p>© 2023. All rights reserved by Sakil Ahmed.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
