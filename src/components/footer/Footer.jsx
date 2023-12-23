import React from "react";
import "./Footer.css"
function Footer() {

    return (
        <section id="footer">
        <div className="footer">
            <ul className="links">
                <div className="relevant-link">
                    <a href= "https://youtube.com/" target="_blank">Youtube</a>
                </div>
                <div className="relevant-link">
                    <a href= "https://twitter.com/" target="_blank">Twitter</a>
                </div>
                <div className="relevant-link">
                    <a href= "https://github.com/" target="_blank">Github</a>
                </div>
                <div className="relevant-link">
                    <a href= "https://facebook.com/" target="_blank">Facebook</a>
                </div>
            </ul>
            <h2>
                FOOTER.
            </h2>
        </div>
        </section>
    );
}

export default Footer;
