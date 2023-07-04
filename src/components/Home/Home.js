import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handler() {
    navigate("/Login");
  }
  return (
    <div id="Home" className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.text}>
          <a className={styles.text1}>"Take care of your Body .</a>
          <br />
          <a className={styles.text1}>it's the only place you</a>
          <br />
          <a className={styles.text1}> have to live "</a>
        </div>

        <div className={styles.btn}>
          <button onClick={handler} className={styles.btn1}>
            Join The GYM
          </button>
        </div>
      </div>
    </div>
  );
}
