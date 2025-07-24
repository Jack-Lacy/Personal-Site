import './About.scss'
import Slideshow from "../componants/Slideshow";
import Button from 'react-bootstrap/Button';

export default function About() {
    function downloadResume() {
        window.open("/resources/Jack-Resume.pdf");
    }

    return (
        <div className="About" id="about">
            <div className="Text">
            <h1>Hi! I'm Jack</h1>
                <div className="Paragraph">
                    <p>
                        I am an incoming master's student and previous software engineering graduate at Western University,
                        with my research focus being on generative AI for software development. I previously interned at
                        CARFAX where I gained experience in cloud (AWS) development, Java development, React + TypeScript
                        development, and much more. I am passionate about the quality of my work and I enjoy solving
                        interesting and complex problems in software development
                    </p>
                    <br/>
                    <p>
                        Outside of my studies, I enjoy camping, traveling, and video games. You can see some pictures
                        from camping and traveling on the right! I also enjoy pursing software development passion
                        projects in fields of cloud development, game development, networking, and much more.
                    </p>
                </div>
                <Button className="ResumeButton" variant="primary" onClick={() => downloadResume()}>Resume</Button>
            </div>
            <Slideshow/>
        </div>
    )
}