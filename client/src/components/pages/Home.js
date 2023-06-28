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
              <Link to={`/our-services`} className='iconButton'>
                <i id='homeHomeIcon' className='home huge icon color' alt='icon of house' />
              </Link>
              <h3>HOME VISITS</h3>
              <p>If it is a taxing effort for you or your loved one to leave the home to receive medical care, home visits may be the option for you.<br /><b>Please call</b> our office for availability.</p>
            </div>
            <div className='summary inHomeVisits'>
              <a href='/our-services#IHA' className='iconButton'>
                <i id='homeHomeIcon' className='tv huge icon color' alt='icon of house' />
              </a>
              <h3>IN-HOME ASSESSMENTS</h3>
              <p>We partner with numerous health plans to provide an in-home or telemedicine visit to their members.  These visits provide a comprehensive medical picture that is useful for the plan, the member, and the member's primary care provider.  These visits ensure that the member doesn't have any gaps in care, and quality measures are met appropriately.</p>
            </div>
            <div className='summary inOfficeVisits'>
              <a href='/our-services#IOP' className='iconButton'>
                <i className='building huge icon color' alt='icon of office'/>
              </a>
              <h3>IN-OFFICE VISITS</h3>
              <p>Due to interest from families, friends, caregivers, and the community, House Call Doctors is now offering primary care visits to non-homebound patients, age 18+, in our office!</p>
            </div>
            <div className='summary groupHomes'>
            <a href='/our-services#PCS' className='iconButton'>
              <i className='hospital huge icon color' alt='icon of hospital'/>
            </a>
              <h3>GROUP HOMES</h3>
              <p>Our providers specialize in taking care of disabled persons in the Group Home setting. <Link to={`/contact-us`} className='homeLink'>Call us</Link> today for an appointment.</p>
            </div>
            <div className='summary assistedLiving'>
            <a href='/our-services#PCS' className='iconButton'>
              <i className='doctor huge icon color' alt='icon of doctor'/>
            </a>
              <h3>ASSISTED LIVING</h3>
              <p>Our providers currently care for patients in more than 50 Assisted Livings, Group Homes, and Memory Care facilities across Davis, Salt Lake, Tooele, Utah, and Weber Counties. <Link to={`/contact-us`} className='homeLink'>Call us</Link> today to see if a provider is in your facility.</p>
            </div>
            <div className='summary weightLoss'>
              <a href='/our-services#weightLoss' className='iconButton'>
                <i className='weight huge icon color' alt='icon of scale'/>
              </a>
              <h3>MEDICATION ASSISTED WEIGHT LOSS</h3>
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
