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
                    description="B-Nav is a project aimed at helping people at Western University navigate the
                    engineering buildings. This project utilizes a custom node like data-structure, uniform cost
                    search, and leaflet.js to navigate from one spot to another. Accessibility options can be enabled
                    to ensure everyone is able to navigate through Western's maze-like structure of buildings. B-Nav was
                    a 4th year capstone project and won 3rd place overall out of 30+ projects."
                    techStack={[
                        ["React", "#61DBFB"],
                        ["TypeScript", "#3178c6"],
                        ["leaflet.js", "#b8ff6c"],
                        ["AWS", "#FF9900"]
                    ]}
                    colour={"#ca65f8"}
                />
                <Tile
                    title="WETT Technical Display"
                    description="The Western Engineering Toboggan Team technical display was created as a simple way to
                    view and interact with the various componants and structures of Western's concrete toboggan. The
                    site was on display at the great northern concrete toboggan race (GNCTR 2025) during the technical
                    exhibition. The site can be accessed at wett-tech-ex.ca/"
                    techStack={[
                        ["React", "#61DBFB"],
                        ["TypeScript", "#3178c6"],
                        ["Three.js", "#ffffff"],
                        ["AWS", "#FF9900"],
                    ]}
                    url="https://github.com/Jack-Lacy/WETT-Technical-Display"
                    colour={"#76eeff"}
                />
                <Tile
                    title="Secure Family Messaging"
                    description="This project is based on the idea of data ownership. The goal here is to create a
                    messaging server that can be run on a host's computer and have family and friends connect to it.
                    This enables users to be the soul owners of their own messaging data. This project is currently in
                    the early stages of development. Both a front-end and back-end weill be developped."
                    techStack={[
                        ["React", "#61DBFB"],
                        ["TypeScript", "#3178c6"],
                        ["AWS", "#FF9900"],
                        ["Java", "#ff7300"],
                        ["Spring boot", "#6DB33F"],
                    ]}
                    url="https://github.com/Jack-Lacy/Secure-Family-Messenger"
                    colour={"#76ffa6"}
                />
                <Tile
                    title="Personal Website"
                    description="You've already seen it! Click here to see the Github repository."
                    techStack={[
                        ["React", "#61DBFB"],
                        ["TypeScript", "#3178c6"],
                        ["AWS", "#FF9900"],
                    ]}
                    url="https://github.com/Jack-Lacy/Personal-Site"
                    colour={"#ff7676"}
                />
                <Tile
                    title="Grapple Monkey"
                    description="Grapple Monkey is a Unity Game created for my game design class. It is a platformer
                    in which you play as a monkey who is able to grapple and swing to proceed throught the level. It was
                    designed with a full development process with multiple prototypes, rounds of testing,holding true to
                    game design principals."
                    techStack={[
                        ["Unity", "#bdbdbd"],
                        ["C#", "#3178c6"],
                    ]}
                />
            </div>
        </div>
    )
}