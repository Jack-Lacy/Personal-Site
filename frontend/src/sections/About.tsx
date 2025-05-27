import './About.scss'
import Slideshow from "../componants/Slideshow";

export default function About() {
    return (
        <div className="About">
            <div className="Text">
            <h1>Hi! I'm Jack</h1>
                <div className="Paragraph">
                    <p>
                        I am an incoming master's student and previous software engineering graduate at Western University,
                        with my research focus being on generative AI for software development. I am passionate about the
                        quality of my work and I enjoy solving interesting and complex problems in software development
                    </p>
                    <br/>
                    <p>
                        Outside of my studies, I enjoy camping, running, and video games. I also enjoy pursing software
                        development passion projects in fields of cloud development, game development, networking, and much
                        more.
                    </p>
                </div>
            </div>
            <Slideshow/>
        </div>
    )
}