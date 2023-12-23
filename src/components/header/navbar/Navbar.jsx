import React from "react";
import "./Navbar.css"
function Header() {
    return (
        <nav className="landing-nav">
            <ul>
                <img src={"/assets/apcs.png"} alt="Logo" className="header-logo" />
                <li className = "nav-link"><a href="#beginnings">TIMELINE</a></li>
                <li className = "nav-link"><a href="#projects">PROJECTS</a></li>
                <li className = "nav-link"><a href="#about">ABOUT ME</a></li>
                <li className = "nav-link"><a href="#footer">RELEVANT LINKS</a></li>
            </ul>
        </nav>
    );
}

export default Header;
