import React from "react";
import headphone from "../../assets/headphone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div>
        <h1>100 Thousand Songs, ad-free Over</h1>
        <h1> thousands podcast episodes</h1>
      </div>
      <img src={headphone} alt="headphone" />
    </section>
  );
};

export default Hero;
