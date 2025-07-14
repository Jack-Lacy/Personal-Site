import "./Tile.scss"

interface TileProps{
    title: string;
    description: string;
    imageFile?: string;
    techStack: [string, string][];
    url?: string;
    colour?: string;
}

export default function Tile(props: TileProps) {
    return (
        <div style={props.colour ? { backgroundColor: props.colour } : { backgroundColor: "#d6f8ff" }} className="Tile">
            <div className="InnerTile">
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
                <div className="Skills">
                    {props.techStack.map(([skill, color]) => (
                        <h3 className="Skill" style={{ backgroundColor: color }}>{skill}</h3>
                    ))}
                </div>
            </div>
        </div>
    )
}