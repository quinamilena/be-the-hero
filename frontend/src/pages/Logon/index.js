import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

// CSS & images
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          {/* O link serve para a página não recaregar ao trocar de página */}
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Pessoas abraças" />
    </div>
  );
}

export default Logon;
