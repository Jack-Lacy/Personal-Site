import React from "react";

type SectionProps = {
    header: string
    text: string
}

function Section(props: SectionProps) {
    return <div id={`${props.header.toLowerCase()}sectionContainer`}>
        <h1>{props.header}</h1>
        <div className="textBox">
            <p>
                {props.text}
            </p>
        </div>
    </div>
}

export default Section;