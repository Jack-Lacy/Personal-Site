import "./ExperienceTile.scss"

interface TileProps{
    jobTitle: string;
    jobDescription: string;
    colour?: string;
}

export default function Tile(props: TileProps) {
    return (
        <div style={{
            background: `linear-gradient(135deg, #d6f8ff, ${props.colour || "#3498DB"})`
        }}
             className="ExperienceTile"
        >
            <div className="InnerTile">
                <h2>{props.jobTitle}</h2>
                <p>
                    {props.jobDescription}
                </p>
            </div>
        </div>
    )
}