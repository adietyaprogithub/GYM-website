import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";




export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate()

  const handler = ()=> {
    navigate('/Login')
  }

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];

    // Add the new form data to the array
    const updatedData = [...existingData, formData];

    // Store the updated array in the local storage
    localStorage.setItem("formData", JSON.stringify(updatedData));

    // Reset the form
    setFormData({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });

    // Show the success message
    setIsSubmitted(true);
  };

  return (
    <div className={styles.main}>
      <h1>Register Page</h1>
      <div className={styles.main2}>
        <form onSubmit={handleSubmit}>
          <h3>Enter Your Name</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <h3>Enter Your Email</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <h3>Enter Your Password</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <br />
          <h3>Enter Your Mobile Number</h3>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
          <br />
          <div className={styles.btn}>
            <button className={styles.btn1} type="submit">
              Submit
            </button>
            <button className={styles.btn1} onClick={handler}>
              Login
            </button>
          </div>
        </form>
        {isSubmitted && <p>Submitted successfully!</p>}
      </div>
    </div>
  );
}
