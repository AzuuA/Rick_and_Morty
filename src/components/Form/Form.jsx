import React from "react";
import { useFormAction } from "react-router-dom";
import { validate } from "./validation";
import styles from "../Form/form.module.css"

export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  function handleInputChange(e) {
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.div}>
      <h1 className="login">LOGIN</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}  htmlFor="username">Username:</label>
        <input className={styles.input}
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
          placeholder="ejemplo@gmail.com"
        />
        <p style={{ color: "red" }}>{errors.username}</p>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input className={styles.input}
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
          placeholder="1password"
        />
        <p style={{ color: "red" }}>{errors.password}</p>
        <button className={styles.button} type="submit">ENTRAR</button>
      </form>
    </div>
  );
}
