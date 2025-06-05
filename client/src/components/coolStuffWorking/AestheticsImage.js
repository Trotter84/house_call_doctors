import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import JenAngle from '../../images/Jen_angle.JPG';
import JenSide from '../../images/Jen_side.JPG';
import JenFront from '../../images/Jen_head_on.JPG';
import ShannonAngle from '../../images/Shannon_angle.JPG';
import ShannonFront from '../../images/Shannon_head_on.JPG';
import JeanneFront from '../../images/Jeanne_head_on.JPG';
import JamieLips from '../../images/Jamie_lips.JPG';
import DaisyLips from '../../images/Daisy_lips.JPG';


class AestheticsImage extends Component {
    render() {
        return (
            <div id='aestheticImageCarouselContainer'>
                <Carousel autoPlay ariaLabel='Aesthetic before and afters' interval={4000} showThumbs={false} infiniteLoop>
                    <img src={JenAngle} alt="Patient Jen facing at an angle, before and after" />
                    <img src={JenSide} alt="Patient Jen facing to the side, before and after" />
                    <img src={JenFront} alt="Patient Jen facing the camera, before and after" />
                    <img src={ShannonAngle} alt="Patient Shannon facing at an angle, before and after" />
                    <img src={ShannonFront} alt="Patient Shannon facing the camera, before and after" />
                    <img src={JeanneFront} alt="Patient Jeanne facing the camera, before and after" />
                    <img src={JamieLips} alt="Patient Jamie's lips, before and after" />
                    <img src={DaisyLips} alt="Patient Daisy's lips, before and after" />
                </Carousel>
            </div>
        );
    }
};


export default AestheticsImage;