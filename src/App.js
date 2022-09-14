import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Contact from "./components/Contacts"

import imageA from "./contact.jpg"
import imageB from "./contact2.jpg"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Contact
                img={imageA}
                name="Fiji"
                phone="(212) 023 2890"
                mail="fiji@fiji.meow"
            />
            <Contact
                img={imageB}
                name="Maya"
                phone="(212) 948 4790"
                mail="maya@maya.meow"
            />
        </div>
    )
}