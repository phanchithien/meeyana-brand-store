import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import banner from '/background.jpg';
import classes from './carousel-banner.module.scss'

function CarouselBanner() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
                <img className={classes.image} src={banner} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className={classes.image} src={banner} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={classes.image} src={banner} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBanner;