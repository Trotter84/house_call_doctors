import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FrontPageImage from '../coolStuffWorking/FrontPageImage';
import Styled from 'styled-components';
import Testimonials from '../coolStuffWorking/Testimonials';
import '../../index.css';


const ContactUs = Styled.button`
  transition: all 200ms ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`

const StyledLink = Styled(Link)`
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
  }
`


class Home extends Component {

  componentDidMount() {
    document.title='House Call Doctors UT'
  };

  render() {
    return (
      <>
        <div id='homeRedContainer'>
          <div id='homeMainContainer'>
            <div id='homeCarouselContainer' className='CarouselContainer'>
              <FrontPageImage />
            </div>
            <div id='homeContactArea'>
              <div id='homeContactAreaLeft'>
                <h1 id='homeSectionHeader'>
                  THANK YOU FOR VISITING HOUSE CALL DOCTORS.
                </h1>
                <h3 id='homeSection'>
                  WE ARE DEDICATED TO PROVIDING BETTER PATIENT-FOCUSED PRIMARY CARE TO THE UNDERSERVED AND HOME LIMITED POPULATION.
                </h3>
              </div>
              <StyledLink to={`/contact-us`} id='homeContactUsLink'>
                <ContactUs id='homeContactUs'>CONTACT US</ContactUs>
              </StyledLink>
            </div>
          </div>
        </div>

        <div id='homeMainContainer'>
          <div id='homeInfo'>
            <div id='homeVisits'>
              <i className='homeIcon'>
                <i id='homeHomeIcon' className='home huge icon color' />
              </i>
              <h2 className='homeSubTitle'>HOME VISITS</h2>
              <p className='homeSubText'>
                We <b>are</b> currently accepting new house call patients, please call our office or check in often as this does change frequently based on provider availability.
              </p>
            </div>
            <div id='homeLiving'>
              <i className='homeIcon'>
                <i className='doctor huge icon color' />
              </i>
              <h2 className='homeSubTitle'>ASSISTED LIVING</h2>
              <p className='homeSubText'>
                Our providers currently care for patients in more than 50 Assisted Livings, Group Homes, and Memory Care facilities across Salt Lake, Utah, and Davis Counties. <StyledLink to={`/contact-us`} className='homeStyledLink'>Call us</StyledLink> today to see if a provider is in your facility.
              </p>
            </div>
            <div id='homeHomes'>
              <i className='homeIcon'>
                <i className='hospital huge icon color' />
              </i>
              <h2 className='homeSubTitle'>GROUP HOMES</h2>
              <p className='homeSubText'>
                Our providers specialize in taking care of disabled persons in the Group Home setting. <StyledLink to={`/contact-us`} className='homeStyledLink'>Call us</StyledLink> today for an appointment.
              </p>
            </div>
          </div>
          <div id='homeHalfWhiteSpace' />
          <Testimonials />
        </div>
        <div id='homeWhiteSpace' />
      </>
    );
  }
}


export default Home;
