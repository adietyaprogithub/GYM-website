import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import styles from "./About.module.css";

export default function About() {
  const opts = {
    height: "360",
    width: "500",
    playerVars: {
      // Autoplay the video
      autoplay: 0,
    },
  };

  return (
    <div id="About" className={styles.container}>
      <div className={styles.main1}>
        <YouTube videoId="iARyWGz8zAc" opts={opts} />

        <div className={styles.text1}>
          <h1 className={styles.text2}>About Us </h1>
          <a className={styles.text3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel amet
            soluta quibusdam tempora accusamus, laboriosam maiores! Cupiditate
            minima, unde beatae alias, sapiente veritatis aperiam nam atque
            quisquam, delectus suscipit iste.
          </a>
          <br />
          <div className={styles.btn}>
            <button className={styles.btn1}> Learn More </button>
          </div>
        </div>
      </div>
      <div className={styles.main1}>
        <YouTube videoId="iARyWGz8zAc" opts={opts} />

        <div className={styles.text1}>
          <h1 className={styles.text2}>Why Chose Us </h1>
          <h3>Consultaions With Expert</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eligendi tempora a itaque similique ratione fugiat corporis, libero
            blanditiis inventore.
          </p>
          <h3>Best Workout facilities</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            ab iure consequuntur iusto placeat voluptas neque ullam inventore
            tempore a!
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
