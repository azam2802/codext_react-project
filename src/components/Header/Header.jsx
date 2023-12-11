import React from "react";
import "./Header.css";
import Logo from "../../img/Logo.svg";
import Header_img from "../../img/Header_img.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <header>

          <div class="hamburger-menu">
             <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>
              <ul class="menu__box">
                <li><a class="menu__item" href="#">Главная</a></li>
                <li><a class="menu__item" href="#">Проекты</a></li>
                <li><a class="menu__item" href="#">Команда</a></li>
                <li><a class="menu__item" href="#">Блог</a></li>
                <li><a class="menu__item" href="#">Контакты</a></li>
              </ul>
          </div>

       
          <div className="row nav_row">
            <div className="col-6">
            <img src={Logo} alt="Logo" />
            </div>
            <div className="col-6">
              <div className="links">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonial</a>
                <a href="#">Blog</a>
              </div>
              <a href="#">
                <button>Free Trial</button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <motion.h1
                initial={{ x: -440, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Codext one of the best system in SAAS.
              </motion.h1>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
              </motion.p>
              <a href="#">
                <motion.button
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  Try A Live Demo
                </motion.button>
              </a>
            </div>
            <div className="col-8">
              <motion.img
                src={Header_img}
                alt="Header_img"
                id="Header_img"
                initial={{x:660, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.2}}
                viewport={{once: true}}
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
