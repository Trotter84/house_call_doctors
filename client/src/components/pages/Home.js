import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FrontPageImage from '../coolStuffWorking/FrontPageImage';
import Testimonials from '../coolStuffWorking/Testimonials';
import '../../index.css';


class Home extends Component {

  componentDidMount() {
    document.title='House Call Doctors UT'
  };

  render() {
    return (
      <>
        <h1 className='pageTitleReader' aria-label="Home page">Home</h1>
        <div id='redContainerHome'>
          <FrontPageImage />
          <div id='contactAreaHome'>
            <div id='homeContactAreaText'>
              <h2>THANK YOU FOR VISITING HOUSE CALL DOCTORS.</h2>
              <p>WE ARE DEDICATED TO PROVIDING BETTER PATIENT-FOCUSED PRIMARY CARE TO THE UNDERSERVED AND HOME LIMITED POPULATION.</p>
            </div>
            <Link to={`/contact-us`} id='contactUsButtonHome'>
              CONTACT US
            </Link>
          </div>
        </div>

        <div id='summaryContainerHome'>
          <div id='homeInfo'>
            <div className='summary homeVisits'>
              <i id='homeHomeIcon' className='home huge icon color' alt='icon of house' />
              <h2>HOME VISITS</h2>
              <p>We <b>are</b> currently accepting new house call patients, please call our office or check in often as this does change frequently based on provider availability.</p>
            </div>
            <div className='summary inOfficeVisits'>
              <i className='building huge icon color' alt='icon of office'/>
              <h2>IN-OFFICE VISITS</h2>
              <p>Due to interest from families, friends, caregivers, and the community, House Call Doctors is now offering primary care visits to non-homebound patients, age 18+, in our office!</p>
            </div>
            <div className='summary groupHomes'>
              <i className='hospital huge icon color' alt='icon of hospital'/>
              <h2>GROUP HOMES</h2>
              <p>Our providers specialize in taking care of disabled persons in the Group Home setting. <Link to={`/contact-us`} className='homeLink'>Call us</Link> today for an appointment.</p>
            </div>
            <div className='summary assistedLiving'>
              <i className='doctor huge icon color' alt='icon of doctor'/>
              <h2>ASSISTED LIVING</h2>
              <p>Our providers currently care for patients in more than 50 Assisted Livings, Group Homes, and Memory Care facilities across Davis, Salt Lake, Tooele, Utah, and Weber Counties. <Link to={`/contact-us`} className='homeLink'>Call us</Link> today to see if a provider is in your facility.</p>
            </div>
            <div className='summary weightLoss'>
              <i className='weight huge icon color' alt='icon of scale'/>
              <h2>WEIGHT LOSS</h2>
              <p>If diet and exercise alone have been ineffective at helping you to reach or maintain a healthy weight, this revolutionary medication can be a stepping stone to help you reach your goal weight and live a healthier, happier life.  When combined with diet and exercise, this medication can result in even greater weight loss and help you learn to maintain results.</p>
            </div>
          </div>
          <Testimonials />
        </div>
        <div id='homeWhiteSpace' />
      </>
    );
  }
}


export default Home;
