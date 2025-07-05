import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.scss'

export default function Slideshow() {
    return (
        <div className="Slideshow">
            <Carousel>
                <Carousel.Item>
                    <img src="/resources/slideshow/lakelouise.jpg" alt="ski pic" />
                    <Carousel.Caption>
                        <h3>Lake Louise Ski Resort, Alberta, Canada</h3>
                        <p>Took this photo at the top of the mountain at Lake Louise when I went skiing with my family this year.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/resources/slideshow/marseilles.jpg" alt="marseilles pic" />
                    <Carousel.Caption>
                        <h3>Parc national des Calanques, Marseilles, France</h3>
                        <p>A picture taken after a long hike along the rocky coast of Marseilles. This was during a trip with a friend to southern France.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/resources/slideshow/qewpp.jpg" alt="marseilles pic" />
                    <Carousel.Caption>
                        <h3>Queen Elizabeth Wildlands Provincial Park, Ontario, Canada</h3>
                        <p>Showing off the beautiful campsite we were able to find when canoe camping with friends.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}