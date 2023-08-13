import React, { Component, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import kreiBlanco from "../../images/kreiBlanco.png";
import { routes } from "../../Constants";
import styles from "./Login.module.css";
import googleImg from "../../images/google.png";
import { apiURL } from "../../Constants";
import { useNavigate } from "react-router-dom";

// Import env file

function Login() {
  const redirectToGoogleAuth = () => {
    window.location.href = "https://deapco.wixsite.com/kreidencial";
  };

  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFormSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const authHeader = btoa(`${matricula}:${password}`);
    const headers = new Headers({
      Authorization: `Basic ${authHeader}`,
      AccessControlAllowOrigin: "*",
    });

    try {
      const response = await fetch(
        `${apiURL}/_functions/login`,
        {
          method: "GET",
          headers: headers,
        }
      );

      if (response.ok) {
        console.log("Successful login");
      } else {
        console.log("Unsuccessful login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Header headerLogo={kreiBlanco} isAdmin={false} isLoggedIn={false} />
      <div className={styles.LoginFormContainer}>
        <form className={styles.LoginForm}>
          <h1 className={styles.Form__Title}>Iniciar Sesión</h1>
          <div className={styles.Form__Group}>
            <div className={styles.Form__InputsContainer}>
              <label className={styles.Form__Label}>Matricula</label>
              <div className={styles.Form__InputContainer}>
                <input
                  className={styles.Form__Input}
                  type="text"
                  placeholder="A014..."
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.Form__InputsContainer}>
              <label className={styles.Form__Label}>Contraseña</label>
              <div className={styles.Form__InputContainer}>
                <input
                  className={styles.Form__Input}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.Form__ButtonContainer}>
            <button
              className={styles.Form__Button}
              type="submit"
              onClick={handleLoginFormSubmit}
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className={styles.loginGoogle}>
          <h1>O iniciar sesión con</h1>
          <div className={styles.googleButton}>
            <img
              src={googleImg}
              className={styles.googleImg}
              alt="google"
              onClick={redirectToGoogleAuth}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
