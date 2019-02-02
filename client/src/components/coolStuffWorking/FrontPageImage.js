import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import Styled from 'styled-components';
import MarkFrontPage1 from '../../images/MarkFrontPage1.jpg';
import MarkFrontPage2 from '../../images/MarkFrontPage2.jpg';
import MarkFrontPage3 from '../../images/MarkFrontPage3.jpg';


const CarouselContainer = Styled.div`
  max-height: 600px;
  max-width: 1166px;
`


class FrontPageImage extends Component {
    render() {
        return (
          <CarouselContainer>
            <Carousel autoplay>
                <div>
                  <Image src={MarkFrontPage1} />
                </div>
                <div>
                  <Image src={MarkFrontPage2} />
                </div>
                <div>
                  <Image src={MarkFrontPage3} />
                </div>
                <div>
                  <img />
                </div>
            </Carousel>
          </CarouselContainer>
        );
    }
};


export default FrontPageImage;
