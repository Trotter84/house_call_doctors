import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MarkFrontPage1 from '../../images/MarkFrontPage2.jpg';
import MarkFrontPage2 from '../../images/MarkFrontPage1.jpg';
import MarkFrontPage3 from '../../images/MarkFrontPage3.jpg';


class FrontPageImage extends Component {
    render() {
        return (
          <div id='frontPageImageCarouselContainer' className='CarouselContainer'>
            <Carousel id='frontPageImageCarousel' autoPlay interval={4000} showThumbs={false} infiniteLoop>
                <div className='frontPageImagePhoto'>
                  <img src={MarkFrontPage1} alt="Mark and Client" />
                </div>
                <div className='frontPageImagePhoto'>
                  <img src={MarkFrontPage2} alt="Mark checking Client's heart beat" />
                </div>
                <div className='frontPageImagePhoto'>
                  <img src={MarkFrontPage3} alt="Mark and Client laughing" />
                </div>
            </Carousel>
          </div>
        );
    }
};


export default FrontPageImage;
