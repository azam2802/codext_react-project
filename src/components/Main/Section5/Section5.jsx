import React from "react";
import "./Section5.css";
import news1_img from "../../../img/news1_img.webp";
import news2_img from "../../../img/news2_img.webp";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className="Section5">
      <div className="container">
        <div className="title">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Lastest insights news
          </motion.h1>
        </div>
        <div className="news">
          <div className="row">
            <motion.div
              initial={{ x: -590 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-6"
            >
              <div className="news_img">
                <img src={news1_img} alt="" />
              </div>
              <div className="news_text">
                <div className="news_info">
                  <p>Our Creative Team</p>
                  <p>17 June, 2021</p>
                  <p>by Stive Smithi</p>
                </div>
                <div className="news_article">
                  <div className="news_title">
                    <h1>Running remote offsites and onbordings</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at
                    et vel tellus dignissim quis.
                  </p>
                  <a href="#">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      Continue
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 590 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-6"
            >
              <div className="news_img">
                <img src={news2_img} alt="" />
              </div>
              <div className="news_text">
                <div className="news_info">
                  <p>Create presentations</p>
                  <p>17 June, 2021</p>
                  <p>by Thomas Lews</p>
                </div>
                <div className="news_article">
                  <div className="news_title">
                    <h1>A new look & new ways to collaborate</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at
                    et vel tellus dignissim quis.
                  </p>
                  <a href="#">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      Continue
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
