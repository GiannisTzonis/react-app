import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Contact from "./components/Contacts"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Contact />
            <Contact />
        </div>
    )
}