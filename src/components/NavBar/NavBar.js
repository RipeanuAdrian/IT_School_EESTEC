import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} className="navbar-logo" />
            <h1 className="nav-links" >Acasă</h1>
            <h1 className="nav-links">Despre</h1>
            <h1 className="nav-links">Parteneri</h1>
            <h1 className="nav-links "style={{ color: "#F08456" }}>Echipa</h1>
            <h1 className="nav-links">Contact</h1>
            <h1 className="nav-links" >Regulamnet + FAQ</h1>
            <h1 className="nav-links">Joc</h1>
            <h1 className="nav-links"style={{ color: "#F08456" }} >Înregistare</h1>
        </nav>
    );
}
export default NavBar;