import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import kreiBlanco from "../../images/kreiBlanco.png";
import kreiFoto from "../../images/kreiFoto.png";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../Constants";

const Swal = require("sweetalert2");

export default function Register() {
  const navigate = useNavigate();

  const [getName, setName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getMatricula, setMatricula] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");
  const [getPasswordMatch, setPasswordMatch] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatricula(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    if (event.target.value === getPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const validateMatricula = async (matricula: string) => {
    let answer = false;
    await fetch(`${apiURL}/_functions/validateMatricula/${matricula}`, {
      method: "OPTIONS",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matricula: matricula }),
    }).then((response) => {
      if (response.ok) {
        console.log("Successful login request");
        answer = true;
      } else {
        console.log("Unsuccessful OPTIONS request");
        answer = false;
      }
    });
    return answer;
  };

  const validatePassword = async (password: string) => {
    let answer = false;
    var strongRegex = new RegExp(
      //"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );

    if (strongRegex.test(password)) {
      answer = true;
      //Good password
    }
    return answer;
  };

  const handleRegisterSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Checking if any required fields are empty
    if (
      getName === "" ||
      getLastName === "" ||
      getMatricula === "" ||
      getPassword === "" ||
      getConfirmPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      // Validating matricula and password asynchronously
      const isMatriculaValid = await validateMatricula(getMatricula);
      const isPasswordValid = await validatePassword(getPassword);

      // Checking if passwords match
      if (getPassword === getConfirmPassword) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }

      // Checking if matricula and password are valid, and passwords match
      if (isMatriculaValid && isPasswordValid && getPasswordMatch) {
        // Making a fetch request to register the user
        await fetch(`${apiURL}/_functions/register`, {
          method: "OPTIONS",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            matricula: getMatricula,
            password: getPassword,
            firstName: getName,
            lastName: getLastName,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate("/"); // Assuming navigate is a function for routing
          });
      }
    }
  };

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
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="lastName">Apellido</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="matricula">Matricula</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  onChange={handleMatriculaChange}
                />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className={styles.FormContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="password">Confirmar Contraseña</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleConfirmePasswordChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className={styles.Form__Button}
              onClick={handleRegisterSubmit}
            >
              Registrarse
            </button>
          </form>

          <div className={styles.loginGoogle} onClick={() => navigate("/")}>
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
