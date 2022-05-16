import React from "react"
import "./Skills.css"

function Skills() {
    return (
        <section className="skills">
            <h2 className="titleSkills">Technical Skills</h2>
            <div className="columnsSkills">
                <span className="column">
                    <h3 className="titleColumn"></h3>
                    <ul className="listColumn">
                        <li>HTML</li>
                    </ul>
                </span>
                <span className="column">
                    <h3 className="titleColumn"></h3>
                    <ul className="listColumn">
                        <li>Wordpress</li>
                    </ul>
                </span>
            </div>
        </section>
    )
}

export default Skills