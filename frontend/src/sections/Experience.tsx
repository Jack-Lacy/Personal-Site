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
                    jobDescription="I facilitate labs, grading, and proctoring for AISE 3309 (Databases for artificial
                    intelligence systems engineering students)."
                    colour="#8F55E0"
                />
                <ExperienceTile
                    jobTitle="Software Development Intern"
                    company="CARFAX"
                    jobDescription="Contributed to multiple projects at CARFAX, including a document scraping engine and
                     automated deployment pipelines. Collaborated with senior engineers in an agile environment,
                     practicing pair programming and test-driven development. Gained hands-on experience in React.js,
                     Java, AWS, and CI/CD using GitLab."
                    colour="#1294EF"
                />
            </div>
        </div>
    )
}