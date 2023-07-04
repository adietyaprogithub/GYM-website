import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
      <div className={styles.main1}>
        <h2>GYM </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facilis magnam qui ipsum officiis repudiandae fugit laudantium earum
          officia libero!
        </p>
      </div>
      <div className={styles.main2}>
        <h2>Healthy</h2>

        <p>health</p>
        <p>Health</p>
        <p>Health</p>
        <p>Health</p>
        <p>Health</p>
      </div>

      <div className={styles.main3}>
        <h2>Services</h2>
        <p>Service</p>
        <p>Service</p>
        <p>Service</p>
        <p>Service</p>
      </div>

      <div className={styles.main4}>
        <h2>Programes</h2>

        <p>Programe</p>
        <p>Programe</p>
        <p>Programe</p>
        <p>Programe</p>
      </div>
    </div>
    </div>
  );
}
