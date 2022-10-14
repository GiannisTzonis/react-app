import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Contact from "./components/contacts"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Contact />
        </div>
    )
}