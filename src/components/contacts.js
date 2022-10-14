import React from "react"

export default function Contact() {
    return (
        <div className="contact-card">
            <img src="./images/contact.png" />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src="./images/phone.png" />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src="./images/mail.png" />
                <p>mr.whiskerson@nap.meow</p>
            </div>
        </div>
    )
}