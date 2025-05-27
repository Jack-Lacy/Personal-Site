import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.scss'

export default function Slideshow() {
    return (
        <div className="Slideshow">
            <Carousel>
                <Carousel.Item>
                    <img src="/slideshow/lakelouise.jpg" alt="ski pic" />
                    <Carousel.Caption>
                        <h3>Lake Louise Ski Resort</h3>
                        <p>Took this photo at the top of the mountain at Lake Louise when I went skiing with my family this year</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}