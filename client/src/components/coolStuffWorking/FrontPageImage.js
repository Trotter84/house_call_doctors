import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Styled from 'styled-components';
import MarkFrontPage1 from '../../images/MarkFrontPage2.jpg';
import MarkFrontPage2 from '../../images/MarkFrontPage1.jpg';
import MarkFrontPage3 from '../../images/MarkFrontPage3.jpg';


const CarouselContainer = Styled.div`
  max-height: 600px;
  max-width: 1166px;
  padding: 0 0 100px 80px;

`

const Photo = Styled.div`
  max-height: 600px;
  max-width: 1166px;
`


class FrontPageImage extends Component {
    render() {
        return (
          <CarouselContainer className='CarouselContainer'>
            <Carousel autoPlay interval={4000} showThumbs={false} infiniteLoop>
                <Photo className='FrontPagePhoto'>
                  <img src={MarkFrontPage1} alt="Mark and Client" />
                </Photo>
                <Photo className='FrontPagePhoto'>
                  <img src={MarkFrontPage2} alt="Mark checking Client's heart beat" />
                </Photo>
                <Photo className='FrontPagePhoto'>
                  <img src={MarkFrontPage3} alt="Mark and Client laughing" />
                </Photo>
            </Carousel>
          </CarouselContainer>
        );
    }
};


export default FrontPageImage;
