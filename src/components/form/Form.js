import React, { useRef, useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

function Form() {
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
      setLastName("")
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="form">
      <label for="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        className="inputForm firstName"
        placeholder="First Name"
        tabIndex="1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        className="inputForm lastName"
        placeholder="Last Name"
        tabIndex="2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        className="inputForm email"
        placeholder="example@corp.com"
        value={email}
        tabIndex="3"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="message">Message</label>
      <textarea
        placeholder="Your message"
        name="message"
        className="inputForm message"
        value={message}
        tabIndex="4"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit} className="buttonForm">Send Message</button>
      <span className={emailSent ? "visible" : "notVisible"}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </section>
  );
}
export default Form;
