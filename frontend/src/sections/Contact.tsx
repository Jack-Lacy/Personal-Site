import './Contact.scss'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1>Connect With Me!</h1>
            <h2>Connect with me on Linkedin or email me directly to get in touch</h2>
            <div className="Widgets">
                <a href='https://www.linkedin.com/in/jack-lacy/'>
                    <img src='/resources/pictures/LinkedIn_logo_initials.png'/>
                </a>
                <a href='mailto:jack.p.lacy@gmail.com'>
                    <img src='/resources/pictures/Gmail_icon_(2020).svg'/>
                </a>
            </div>
        </div>
    )
}