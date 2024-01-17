import "./Projects.css"

function Projects() {
    return (
        <section id="projects">
            <h1 className="projects-title">
                Projects
            </h1>
            <div className="projects">
                <ul className="displayed-projects">
                    <div className="project">Project 1
                    <a href={"https://riseforms.purduearc.com/"} > Purdue Arc Rise Form (Main Contributor to Styling)</a>
                    </div>
                    <div className="project"> Project 2</div>
                    <div className="project"> Project 3</div>
                    <div className="project"> Project 4</div>
                </ul>
            </div>
        </section>
    );
}

export default Projects;
