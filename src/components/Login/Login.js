import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handler = () => {
    navigate("/Register");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const usersData = JSON.parse(localStorage.getItem("formData")) || [];

    // Find the user with matching username and password
    const user = usersData.find(
      (userData) => userData.name === username && userData.password === password
    );

    if (user) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }

    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.main}>
      <h1>Login Page </h1>
      <div className={styles.main1}>
        <form onSubmit={handleLogin}>
          <div>
            <h3>Enter Your Username</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <br />
          <div>
            <h3>Enter Your Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <div className={styles.btn}>
            <button className={styles.btn1} type="submit">
              Login
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn1} onClick={handler}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
