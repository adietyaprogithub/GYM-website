import React from "react";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div>
      <div className={styles.main}>
        <HashLink smooth to='#Home'>
          <p className={styles.text}>Home</p>{" "}
        </HashLink>

        <HashLink smooth to='#About'>
          <p className={styles.text}>About</p>{" "}
        </HashLink>

        {/* <p className={styles.text}>About</p> */}

        <HashLink smooth to='#Training'>
          <p className={styles.text}>Training</p>{" "}
        </HashLink>
        {/* <p className={styles.text}>Training</p> */}
        
        <HashLink smooth to='#Pricing'>
          <p className={styles.text}>Pricing</p>{" "}
        </HashLink>

        {/* <p className={styles.text}>Pricing</p> */}
      </div>
    </div>
  );
}
