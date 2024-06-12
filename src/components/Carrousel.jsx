import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselComponent = () => {
    return (
        <Carousel 
        responsive={responsive} 
        autoPlay={true} 
        autoPlaySpeed={4000} 
        infinite={true} 
        arrows={true} 
        showDots={false} 
        swipeable={true} 
        draggable={true}
        >
            <div>
                <img src="" alt=""/>
                <p>Ecommerce</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>Asesoría</p>
            </div>
            <div>
                <img src="" alt=""/>
                <p>Diseño</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;
