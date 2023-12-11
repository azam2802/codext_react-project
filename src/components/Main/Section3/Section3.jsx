import React, { useState } from "react";
import "./Section3.css";
import { motion } from "framer-motion";

const Section3 = () => {
  const [switcher, setSwitcher] = useState(false);

  const tarif1 = document.querySelector("#tarif-1");
  const tarif2 = document.querySelector("#tarif-2");
  const tarif3 = document.querySelector("#tarif-3");
  const tarif_text1 = document.querySelector(".tarif-text1");
  const tarif_text2 = document.querySelector(".tarif-text2");
  const tarif_text3 = document.querySelector(".tarif-text3");

  const handleSwitch = () => {
    if (switcher === false) {
      document.querySelector(".Switcher").style.justifyContent = 'right';
      setSwitcher(true);
    } else if (switcher === true) {
      document.querySelector(".Switcher").style.justifyContent = 'left';
      setSwitcher(false);
    }
  };

  try {
    if (switcher === true) {
      tarif1.textContent = "$100";
      tarif2.textContent = "$300";
      tarif3.textContent = "$490";
      tarif_text1.textContent = "/yr";
      tarif_text2.textContent = "/yr";
      tarif_text3.textContent = "/yr";
    }

    if (switcher === false) {
      tarif1.textContent = "$10";
      tarif2.textContent = "$30";
      tarif3.textContent = "$49";
      tarif_text1.textContent = "/mo";
      tarif_text2.textContent = "/mo";
      tarif_text3.textContent = "/mo";
    }
  } catch (error) {}

  return (
    <div className="Section3">
      <div className="container">
        <div className="title">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Choose Your Best Pricing Plan
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Added for Monthly{" "}
            {/* <img src={Switch} alt="Switch" id="Switch" onClick={handleSwitch} /> */}
            <div className="Switcher" onClick={()=>handleSwitch()}>
             <div className="switch_btn" onClick={()=>handleSwitch()} ></div>
            </div>{" "}
            Yearly
          </motion.h3>
        </div>
        <div className="prices">
          <div className="row">
            <motion.div
              initial={{ x: -430 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-4-main"
            >
              <div className="col-4">
                <h4>Start-up</h4>
                <div className="price">
                  <span id="tarif-1">$10</span>
                  <h1 className="tarif-text1">/mo</h1>
                </div>
              </div>
              <div className="col-8">
                <p>Easy Customizable</p>
                <p>Commercial license</p>
                <p>Singl user license</p>
                <p>Hotline support 24/7</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  TRY THIS PACKAGE
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 260 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-4-main"
            >
              <div className="col-4">
                <h4>Classic</h4>
                <div className="price">
                  <span id="tarif-2">$30</span>
                  <h1 className="tarif-text2">/mo</h1>
                </div>
              </div>
              <div className="col-8">
                <p>Easy Customizable</p>
                <p>Commercial license</p>
                <p>5 user license</p>
                <p>Hotline support 24/7</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  TRY THIS PACKAGE
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 430 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-4-main"
            >
              <div className="col-4">
                <h4>Premium</h4>
                <div className="price">
                  <span id="tarif-3">$49</span>
                  <h1 className="tarif-text3">/mo</h1>
                </div>
              </div>
              <div className="col-8">
                <p>Easy Customizable</p>
                <p>Commercial license</p>
                <p>5 user license</p>
                <p>Hotline support 24/7</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  TRY THIS PACKAGE
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
