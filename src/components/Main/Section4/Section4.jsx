import React from "react";
import "./Section4.css";
import review1_photo from "../../../img/reiew1_photo.webp";
import review2_photo from "../../../img/reiew2_photo.webp";
import review3_photo from "../../../img/reiew3_photo.webp";
import Quotes from "../../../img/quotes.svg";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="Section4">
      <div className="container">
        <div className="title">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let’s see our User’s Review
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
            lobortis nisi.
          </motion.p>
        </div>
        <div className="reviews">
          <div className="row">
            <motion.div
              initial={{ x: -370 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-4"
            >
              <div className="review">
                <img src={Quotes} alt="quotes" />
                <div className="review_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit elit nunc donec elit iaculis arcu. Quis fe........
                  </p>
                </div>
              </div>
              <div className="review_info">
                <div className="review_photo">
                  <img src={review1_photo} alt="review1_photo" />
                </div>
                <div className="review_user">
                  <h2>Wilson Bergson</h2>
                  <h5>Marketing manager</h5>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 150 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-4"
            >
              <div className="review">
                <img src={Quotes} alt="quotes" />
                <div className="review_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit elit nunc donec elit iaculis arcu. Quis fe........
                  </p>
                </div>
              </div>
              <div className="review_info">
                <div className="review_photo">
                  <img src={review2_photo} alt="review2_photo" />
                </div>
                <div className="review_user">
                  <h2>Zaire Aminoff</h2>
                  <h5>Marketing manager</h5>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 370 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-4"
            >
              <div className="review">
                <img src={Quotes} alt="quotes" />
                <div className="review_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit elit nunc donec elit iaculis arcu. Quis fe........
                  </p>
                </div>
              </div>
              <div className="review_info">
                <div className="review_photo">
                  <img src={review3_photo} alt="review3_photo" />
                </div>
                <div className="review_user">
                  <h2>Ryan Press</h2>
                  <h5>Marketing manager</h5>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
