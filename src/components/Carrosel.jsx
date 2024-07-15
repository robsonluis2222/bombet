import React from 'react';
import Slider from 'react-slick';
import './Carrosel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrosel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='pai-carrosel'>
            <Slider {...settings}>
                <div className='component-carrosel'>
                    <img src="https://i.imgur.com/v8bt9SI.png" alt="img1" />
                </div>
                <div className='component-carrosel'>
                    <img src="https://i.imgur.com/iXbyXvk.png" alt="img2" />
                </div>
                <div className='component-carrosel'>
                    <img src="https://i.imgur.com/Zw2hCJ8.png" alt="img3" />
                </div>
            </Slider>
        </div>
    );
};

export default Carrosel;
