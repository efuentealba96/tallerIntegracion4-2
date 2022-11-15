import React, { useState } from "react";
import "./arround";
import "./../App.css";
import Logo from "./../img/image2vector.svg";
import change from "./arround";
import { useNavigate } from "react-router-dom";
import { endpoint, axios } from "../services/http";
export default function LoginPage() {
  // const getPDF = async () => {
  //   const response = await axios.get(`${endpoint}/document`, {
  //     responseType: "blob",
  //   });

  //   const file = new Blob([response.data], { type: "application/pdf" });
  //   const file_url = URL.createObjectURL(file);
  //   window.open(file_url, "_blank");
  // };
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post(endpoint + "/login", { rut: rut, password: password })
      .then((response) => {
        if (response.data === "Validación completa") {
          navigate("/user");
          localStorage.setItem("rut", rut);
        } else {
          navigate("/");
        }
      });
  };

  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form onSubmit={loginUser} class="sign-in-form">
            <h2 class="title">Iniciar Sesión</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                placeholder="Ingresa tu RUT"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Necesitas ayuda </p>
            <div class="social-media">
              <a href="/" class="social-icon">
                <i class="fa fa-calendar"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fa fa-address-book"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Cambiar Contraseña</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Nombre usuario" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="new-password" placeholder="Nueva Contraseña" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="new-password"
                placeholder="Repite la nueva contraseña"
              />
            </div>
            <input type="submit" class="btn" value="Listo" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="/" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="/" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Bienvenido</h3>
            <p>
              Si no recuerdas tu contraseña o si necesitas cambiarla , sigue por
              aqui y te mostraremos donde puedes hacerlo .
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={change}>
              Cambiar Contraseña
            </button>
          </div>
          <img src={Logo} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Eres parte de la Universidad Catolica de Temuco ?</h3>
            <p>
              Si ya eres parte y no necesitas un cambio , entonces te invitamos
              a ingresar a nuestro portal.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Iniciar Sesión
            </button>
            {/* <button class="btn transparent" id="sign-in-btn" onClick={getPDF}>
              PDF
            </button> */}
          </div>
          <img class="image" alt="" />
        </div>
      </div>
    </div>
  );
}
