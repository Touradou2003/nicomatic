import React, { useState } from "react";
import axios from "axios";
import footer from "../assets/footer.png";
import '../styles/footer.css';

const Footer = () => {
  // Définir l'état initial pour les champs du formulaire
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  // Extraire les valeurs des champs du formulaire
  const { firstname, lastName, phone, email, message } = formData;

  // Mettre à jour les valeurs des champs du formulaire lorsque l'utilisateur saisit des données
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Soumettre le formulaire
  const onSubmit = async e => {
    e.preventDefault();
    try {
      // Configurer les en-têtes de la requête
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      // Créer le corps de la requête à envoyer au backend
      const body = JSON.stringify({ firstname, lastName, phone, email, message });

      // Envoyer les données du formulaire au backend
      const res = await axios.post("http://localhost:5000/api/formulaire", body, config);

      // Afficher la réponse du backend dans la console
      console.log(res.data);
    } catch (err) {
      // Afficher les erreurs dans la console
      console.error(err.response.data);
    }
  };

  return (
    <section id="footer">
      <div className="imgFooter">
        <div>
          <img className="img" src={footer} alt="footer" />
        </div>
        <div className="formContainer">
          <form onSubmit={e => onSubmit(e)}>
            <div className="bouge">
              <h2>Contactez-nous</h2>
              <label>
                Nom:
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={e => onChange(e)}
                  required
                />
              </label>
              <label>
                Prénom:
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={e => onChange(e)}
                  required
                />
              </label>
              <label>
                Téléphone:
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={e => onChange(e)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={message}
                  onChange={e => onChange(e)}
                  required
                ></textarea>
              </label>
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
