import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MarkFrontPage1 from '../../images/MarkFrontPage2.jpg';
import MarkFrontPage2 from '../../images/MarkFrontPage1.jpg';
import MarkFrontPage3 from '../../images/MarkFrontPage3.jpg';


class FrontPageImage extends Component {
    render() {
        return (
          <div id='carouselContainerHome'>
            <Carousel id='frontPageImageCarousel' autoPlay ariaLabel='Image carousel of Mark and patient.' interval={4000} showThumbs={false} infiniteLoop>
                <img src={MarkFrontPage1} alt="Mark and Client" />
                <img src={MarkFrontPage2} alt="Mark checking Client's heart beat" />
                <img src={MarkFrontPage3} alt="Mark and Client laughing" />
            </Carousel>
          </div>
        );
    }
};


export default FrontPageImage;
