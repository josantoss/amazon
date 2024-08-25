import classes from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from'./images/data.js';
import { Carousel } from "react-responsive-carousel";


const myCarousel = () => {
    return (
        <div>
            <Carousel auto-play={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
                showArrows={true}
            >
            {images.map((imageItem) =>{ return <img src={imageItem} alt='Images' /> })}
            </Carousel>
            <div className={classes.color_fade}></div>

    </div>
)
}

export default myCarousel;

