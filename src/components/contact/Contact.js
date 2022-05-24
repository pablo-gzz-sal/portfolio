import React from "react"
import "./Contact.css"
import Form from "../form/Form"

function Contact() {
    return (
        <section className="contact">
            <h2 className="titleContact">Contact Me</h2>
            <div className="containerContactInfo">
                <span className="containerInd">
                    <Form />
                </span>
                <span className="containerInd"></span>
            </div>
        </section>
    )
}

export default Contact