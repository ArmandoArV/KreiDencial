import React from "react";
import Header from "../../Components/Header/Header";
import kreiBlanco from "../../images/kreiBlanco.png";
import kreiFoto from "../../images/kreiFoto.png";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <>
      <Header headerLogo={kreiBlanco} isAdmin={false} isLoggedIn={false} />
      <div className={styles.OuterContainer}>
        <div className={styles.LeftContainer}>
          <form className={styles.RegisterFormContainer}>
            <h1>Registro</h1>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="name">Nombre</label>
              </div>
              <div className={styles.inputContainer}>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="lastName">Apellido</label>
              </div>
              <div className={styles.inputContainer}>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="matricula">Matricula</label>
              </div>
              <div className={styles.inputContainer}>
                <input type="text" id="matricula" name="matricula" />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className={styles.inputContainer}>
                <input type="password" id="password" name="password" />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="password">Confirmar Contraseña</label>
              </div>
              <div className={styles.inputContainer}>
                <input type="password" id="password" name="password" />
              </div>
            </div>
            <button type="submit" className={styles.Form__Button}>
              Registrarse
            </button>
          </form>

          <div
            className={styles.loginGoogle}
            onClick={() => navigate("/")}
          >
            <h1>¿Ya tienes cuenta? Iniciar sesisón </h1>
          </div>
        </div>
        <div className={styles.RightContainer}>
          <img src={kreiFoto} className={styles.kreiFoto} alt="kreiFoto" />
        </div>
      </div>
    </>
  );
}
