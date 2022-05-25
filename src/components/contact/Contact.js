import React from "react"
import "./Contact.css"
import Form from "../form/Form"

function Contact({darkMode, language}) {
    return (
        <section className={`contact ${darkMode ? "contactLight" : ""}`} id="contact">
            <h2 className="titleContact">{language ? "Contáctame" : "Contact Me"}</h2>
            <div className="containerContactInfo">
                <span className="containerInd">
                    <Form darkMode={darkMode} language={language} />
                </span>
                <span className="containerInd containerInfoPer">
                    <div className="contactInd contactEmail">
                    <i class="fas fa-envelope fa-3x"></i>
                    <h3>Email</h3>
                    <p>pablo.gzz.sal@gmail.com</p>
                    </div>
                    <div className="contactInd">
                    <i class="fas fa-phone fa-3x"></i>
                    <h3>{language ? "Celular" : "Phone"}</h3>
                    <p>+385 91 5537 795</p>
                    </div>
                    <div className="contactInd">
                    <i class="fab fa-whatsapp fa-3x"></i>
                    <h3>WhatsApp</h3>
                    <p>+52 81 1909 0224</p>
                    </div>
                </span>
            </div>
        </section>
    )
}

export default Contact