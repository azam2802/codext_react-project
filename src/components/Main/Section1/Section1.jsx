import React from "react";
import "./Section1.css";
import Section1_img from "../../../img/Sectin-1_img.svg";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="Section_1">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <motion.img
                initial={{ x: -550, y: -200, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={Section1_img}
                alt="Section1-img"
              />
            </div>
            <div className="col-4">
              <motion.h1
                initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                It’s helpful for operating system
              </motion.h1>
              <div className="list">
                <div className="list_elem">
                  <motion.h2
                    initial={{ x: 520, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z"
                        fill="#EF821E"
                      />
                    </svg>
                    Ultra fast & Secure
                  </motion.h2>
                  <motion.p
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    vitae velit proin justo, elementum siIn morbi
                  </motion.p>
                </div>
                <div className="list_elem">
                  <motion.h2
                    initial={{ x: 520, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z"
                        fill="#5EBD14"
                      />
                    </svg>
                    Allows Customization
                  </motion.h2>
                  <motion.p
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    vitae velit proin justo, elementum siIn morbi
                  </motion.p>
                </div>
                <div className="list_elem">
                  <motion.h2
                    initial={{ x: 520, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z"
                        fill="#3B87FA"
                      />
                    </svg>
                    Smart contract
                  </motion.h2>
                  <motion.p
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    vitae velit proin justo, elementum siIn morbi
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
