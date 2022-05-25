import React, { useRef, useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

function Form({ darkMode, language }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_cg7xz9l";
      const templateId = "template_ipegn2x";
      const userId = "hrcDEEqgizVMLZGMf";
      const templateParams = {
        name,
        lastName,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="form">
      <label for="firstName">{language ? "Nombre" : "First Name"}</label>
      <input
        type="text"
        name="firstName"
        className={`inputForm firstName ${darkMode ? "inputFormLight" : ""}`}
        placeholder={language ? "Nombre" : "First Name"}
        tabIndex="1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="lastName">{language ? "Apellido" : "Last Name"}</label>
      <input
        type="text"
        name="lastName"
        className={`inputForm lastName ${darkMode ? "inputFormLight" : ""}`}
        placeholder={language ? "Apellido" : "Last Name"}
        tabIndex="2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        className={`inputForm email ${darkMode ? "inputFormLight" : ""}`}
        placeholder="example@corp.com"
        value={email}
        tabIndex="3"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="message">{language ? "Mensaje" : "Message"}</label>
      <textarea
        placeholder={language ? "Mensaje" : "Message"}
        name="message"
        className={`inputForm message ${darkMode ? "inputFormLight" : ""}`}
        value={message}
        tabIndex="4"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        onClick={submit}
        className={`buttonForm ${darkMode ? "buttonFormLight" : ""}`}
      >
        {language ? "Mandar mensaje" : "Send message"}
      </button>
      <span className={emailSent ? "visible" : "notVisible"}>
        {language
          ? "Gracias por su mensaje, estare pronto en contacto!"
          : "Thank you for your message, I will be in touch in no time!"}
      </span>
    </section>
  );
}
export default Form;
