import "./Experience.scss"
import ExperienceTile from "../componants/ExperienceTile";

export default function Experience() {
    return (
        <div className="Experience" id="experience">
            <div className="Text">
                <h1>Professional Experience</h1>
                <div className="Paragraph">
                    <p>
                        This is my professional experience. I have over a year of internship experience and I am
                        currently working as a graduate teaching assistant while completing my masters.
                    </p>
                </div>
            </div>
            <div className="ExperienceTiles">
                <ExperienceTile
                    jobTitle="Graduate Teaching Assistant"
                    company="Western University"
                    jobDescription="This is a job description"
                    colour="#8F55E0"
                />
                <ExperienceTile
                    jobTitle="Software Development Intern"
                    company="CARFAX"
                    jobDescription="This is a job description"
                    colour="#1294EF"
                />
            </div>
        </div>
    )
}