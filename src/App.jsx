import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Timeline from "./components/timeline/Timeline";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div>
            <Header />
            <Timeline />
            <div className="timeline-cover">
                <Projects />
                <About />
                <Footer/>
            </div>

        </div>
    );
}

export default App;
