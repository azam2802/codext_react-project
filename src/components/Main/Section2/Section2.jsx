import React from "react";
import "./Section2.css";
import Section2_card1 from "../../../img/section2_card1.svg";
import Section2_card2 from "../../../img/section2_card2.svg";
import Section2_card3 from "../../../img/section2_card3.svg";
import Section2_card4 from "../../../img/section2_card4.svg";
import Circle_arrow from "../../../img/circle_arrow.svg";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ x: -350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-3"
          >
            <div className="col-6">
              <img src={Section2_card1}  className="Section2_card-img" alt="section2_card-img" />
            </div>
            <div className="col-6">
              <h2>Clean Code</h2>
              <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
              <motion.img
                src={Circle_arrow}
                alt="circle_arrow"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -330 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-3"
          >
            <div className="col-6">
              <img src={Section2_card2} className="Section2_card-img" alt="section2_card-img" />
            </div>
            <div className="col-6">
              <h2>Data Analytic</h2>
              <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                src={Circle_arrow}
                alt="circle_arrow"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-3"
          >
            <div className="col-6">
              <img src={Section2_card3} className="Section2_card-img" alt="section2_card-img" />
            </div>
            <div className="col-6">
              <h2>Full Secured</h2>
              <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                src={Circle_arrow}
                alt="circle_arrow"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-3"
          >
            <div className="col-6">
              <img src={Section2_card4} className="Section2_card-img" alt="section2_card-img" />
            </div>
            <div className="col-6">
              <h2>24/7 Support</h2>
              <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                src={Circle_arrow}
                alt="circle_arrow"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
