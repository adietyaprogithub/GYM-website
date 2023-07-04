import React, { useState } from "react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Get Started");

  const handleButtonClick = (buttonIndex) => {
    if (buttonIndex === 1) {
      setMessage("You have started Monthly Pass!");
    } else if (buttonIndex === 2) {
      setMessage("You have started Yearly Pass!");
    }
  };

  return (
    <div id="Pricing" className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.main1}>
          <div>
            <p className={styles.info1}>Monthly Pass</p>
            <h2 className={styles.info2}> $ 20</h2>
            <ol>
              <li> Month Plan</li>
              <li>Free Trainer mentorship</li>
              <li>24 Hour Access</li>
            </ol>

            <div className={styles.btn}>
              <button
                className={styles.btn1}
                onClick={() => handleButtonClick(1)}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.main1}>
          <div>
            <p className={styles.info1}>Yearly Pass</p>
            <h2 className={styles.info2}> $ 200</h2>
            <ol>
              <li> Yearly Plan</li>
              <li>Free Trainer mentorship</li>
              <li>24 Hour Access</li>
            </ol>

            <div className={styles.btn}>
              <button
                className={styles.btn1}
                onClick={() => handleButtonClick(2)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.main3}>
          <div>
            <h1 className={styles.header}>Membership</h1>
          </div>
          <h3>Pass is available for the Monthly and Yearly</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            voluptatibus vero, magnam suscipit ipsum obcaecati blanditiis quae
            dolorum ipsa totam repellendus perferendis accusamus eum in unde
            possimus! Delectus, dicta repellat?
          </p>

          <ol>
            <li>Train By world best Mentor</li>
            <li>One Pass Multiple Benefit</li>
            <li>Get Healthy in Your Life with Minimal Price</li>
            <li>No Hidden Charges</li>
            <li>Be the member of the Great GYM</li>
          </ol>

          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
