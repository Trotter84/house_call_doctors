import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import MarkFrontPage1 from '../../images/MarkFrontPage2.jpg';
// import MarkFrontPage2 from '../../images/MarkFrontPage1.jpg';
// import MarkFrontPage3 from '../../images/MarkFrontPage3.jpg';
import GroupPhoto from '../../images/HCD_group_front.jpg';
import GroupPhoto1 from '../../images/group_photo1.jpg';
import GroupPhoto2 from '../../images/group_photo2.jpg';
import GroupPhoto3 from '../../images/group_photo3.jpg';
import GroupPhoto4 from '../../images/group_photo4.jpg';
import GroupPhoto5 from '../../images/group_photo5.jpg';
import GroupPhoto6 from '../../images/group_photo6.jpg';


class FrontPageImage extends Component {
    render() {
        return (
          <div id='carouselContainerHome'>
            <Carousel id='frontPageImageCarousel' autoPlay ariaLabel='Image carousel of Mark and patient.' interval={4000} showThumbs={false} infiniteLoop>
                <img src={GroupPhoto} alt="House Call Doctors team" />
                <img src={GroupPhoto4} alt="House Call Doctors team" />
                <img src={GroupPhoto5} alt="House Call Doctors team" />
                <img src={GroupPhoto6} alt="House Call Doctors team" />
                <img src={GroupPhoto3} alt="House Call Doctors team" />
                <img src={GroupPhoto2} alt="House Call Doctors team" />
                <img src={GroupPhoto1} alt="House Call Doctors team" />
                {/* <img src={MarkFrontPage1} alt="Mark and Client" />
                <img src={MarkFrontPage2} alt="Mark checking Client's heart beat" />
                <img src={MarkFrontPage3} alt="Mark and Client laughing" /> */}
            </Carousel>
          </div>
        );
    }
};


export default FrontPageImage;
