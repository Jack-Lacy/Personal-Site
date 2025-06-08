import "./Projects.scss"
import Tile from "../componants/Tile";

export default function Projects() {
    return (
        <div className="Projects" id="projects">
            <div className="Text">
                <h1>My Projects</h1>
                <div className="Paragraph">
                    <p>
                        Here are some projects I've been working on. Some are school related and some are personal. I
                        am very proud of my work and if I am able to, the Github repository will be provided.
                    </p>
                </div>
            </div>
            <div className="Tiles">
                <Tile
                    title="B-Nav"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
                <Tile
                    title="WETT Technical Display"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
                <Tile
                    title="Secure Family Messaging"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
                <Tile
                    title="Personal Website"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
                <Tile
                    title="Grapple Monkey"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
                <Tile
                    title="Heart Attack Risk Factor Analysis"
                    description="blah blah"
                    techStack={["React", "TypeScript", "AWS"]}
                />
            </div>
        </div>
    )
}