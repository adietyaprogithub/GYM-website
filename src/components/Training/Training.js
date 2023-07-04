import React from "react";
import styles from "./Training.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Training() {
 

  
  const data = [
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Exercise Make You Fit",
      image:
        "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

//  const navigate = useNavigate();

//  function changer(){
//   navigate('/Mentor')
//  }

  return (
    <div id="Training">
      <Listing data={data} />
    </div>
  );
}

function Listing({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.info1}>Meet Our Team </h2>
        <p className={styles.info2}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nobis aliquid cum ducimus placeat, aspernatur deserunt ipsa officia.
          Minima nam ut omnis amet nisi suscipit eaque sequi maxime ipsa. Porro.
        </p>
      </div>
      <div className={styles.main}>
        {data.map((item, index) => {
          return (
            <div className={styles.main2}>
              <img className={styles.imgr} src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.butn}>
       <Link to ='/Mentor'>
       <button  className={styles.butn1} >
          Learn More about Trainer
        </button>
       </Link>
        
      </div>
    </div>
  );
}
