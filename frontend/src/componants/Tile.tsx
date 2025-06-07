import "./Tile.scss"

interface TileProps{
    title: string;
    description: string;
    imageFile?: string;
    techStack: string[];
    url?: string;
}

export default function Tile(props: TileProps) {
    return (
        <div className="Tile">
            <div className="InnerTile">
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
                {props.techStack.map(skill => (
                    <h3>{skill}</h3>
                ))}
            </div>
        </div>
    )
}