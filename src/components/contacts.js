import React from "react"

export default function Contact(props) {
    console.log(props)
    return (
            <div className="contact-section">
                <div className="contact-card">
                    <img src={props.img} />
                    <h3>{props.name}</h3>
                    <div className="info-group">
                        {/* <img src="./images/phone.png" /> */}
                        <p>{props.phone}</p>
                    </div>
                    <div className="info-group">
                    {/* <img src="./images/mail.png" /> */}
                    <p>{props.mail}</p>
                    </div>
                </div>
        </div>
        
    )
}