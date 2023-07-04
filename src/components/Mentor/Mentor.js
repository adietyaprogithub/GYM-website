import React from "react";
import styles from "./Mentor.module.css";
import { useNavigate } from "react-router-dom";

export default function Mentor() {

  

  
     
  const data = [
    {
      imgr: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jimi",
    },
    {
      imgr: "https://images.pexels.com/photos/4587427/pexels-photo-4587427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Alacia",
    },
    {
      imgr: "https://images.pexels.com/photos/3763874/pexels-photo-3763874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Paul",
    },
    {
      imgr: "https://images.pexels.com/photos/7991623/pexels-photo-7991623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Vince",
    },
    {
      imgr: "https://images.pexels.com/photos/4057069/pexels-photo-4057069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sera",
    },
    {
      imgr: "https://images.pexels.com/photos/6551434/pexels-photo-6551434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Daniel",
    },
  ];
  return (
    <div className={styles.main}>
        <h1>Know Your Mentors</h1>
      <div className={styles.main1}>
        {data.map((item, index) => {
          return (
            <div>
              <img className={styles.imgr} src={item.imgr} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
