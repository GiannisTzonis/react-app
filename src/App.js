import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Contact from "./components/Contacts"

//import imageA from "../components/images/contact.jpg"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Contact
                img="./images/contact.jpg"
                name="Fiji"
                phone="(212) 023 2890"
                mail="fiji@fiji.meow"
            />
            <Contact
                img="./images/contact2.jpg"
                name="Maya"
                phone="(212) 948 4790"
                mail="maya@maya.meow"
            />
        </div>
    )
}