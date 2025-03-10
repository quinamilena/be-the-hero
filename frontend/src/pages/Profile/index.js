import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    if (!ongId) {
      history.push("/");
    }
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((resp) => {
        setIncidents(resp.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      let confirmDelete = window.confirm(
        "Você tem certeza que deseja deletar o caso ?"
      );
      if (confirmDelete === true) {
        await api.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId,
          },
        });
        setIncidents(incidents.filter((incident) => incident.id !== id));
      } else {
        return;
      }
    } catch (err) {
      alert("Erro ao deletar o caso, tente novamente");
      console.error(err);
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
