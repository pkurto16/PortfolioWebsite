import React from "react";
import "./Navbar.css"
function Header() {
    return (
        <nav className="landing-nav">
            <ul>
                <img src={"/assets/apcs.png"} alt="Logo" className="header-logo" />
                <li className = "nav-link"><a href="#Beginnings">TIMELINE</a></li>
                <li className = "nav-link"><a href="#Projects">PROJECTS</a></li>
                <li className = "nav-link"><a href="#Relevant-links">RELEVANT LINKS</a></li>
                <li className = "nav-link"><a href="#About">ABOUT ME</a></li>
            </ul>
        </nav>
    );
}

export default Header;
