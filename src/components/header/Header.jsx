import React from "react";
import Navbar from "./Navbar";
import "./header.css"

function Header() {
    return (
        <>
        <Navbar></Navbar>
        <div className="header">
            <h1>Peter Kurto</h1>
            <p>Purdue University - Computer Science Student</p>
            <p>Short blurb about yourself...</p>
        </div>
            </>
    );
}

export default Header;
