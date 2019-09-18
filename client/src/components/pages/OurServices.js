import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image, Divider } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';

const SubText = Styled.div`
  padding-left: 40px;

  p{
    color: #515151;
    font-weight: normal;
    font-size: 16px;
  }
`


class OurServices extends Component {

  componentDidMount() {
    document.title='Our Services'
  }

  render() {
    return(
      <>
        <div id='imageDividerContainer'>
          <Image id='imageDivider' src={HCDpageDivider} />
        </div>
        <div id='servicesMainContainer'>
          <div id='servicesSubSection'>
            <div id='servicesInfo'>


              <SubText>
                <p>Our providers see patients in Assisted Living Facilities, Memory Care Units, Group Homes, and Individual Homes.</p>
              </SubText>
            </div>

          </div>
          <div id='servicesQuarterWhiteSpace' />
          <h2 className='servicesTitle'>
            PRIMARY CARE SERVICES
          </h2>
          <Divider />
          <div id='servicesHalfWhiteSpace' />
          <SubText>
            <p>
              House Call Doctors has been providing primary care services to patients in assisted livings, group homes, and individual homes since 2004.<br />Our providers specialize in geriatrics, hospice and palliative care, dementia, and caring for disabled adults in the group home setting.<br />We are dedicated to our patients and strive to provide the most comprehensive and compassionate patient care.<br />We work with a number of companies that provide services in the home.
            </p>
            <p className='servicesPointsTitle'>These services include but are not limited to:</p>
            <div id='servicesPointsContainer'>
              <p>• X-ray</p>
              <p>• Ultrasound</p>
              <p>• Sleep Studies</p>
              <p>• EEG/EKG/Echocardiogram</p>
              <p>• Eye Exams</p>
              <p>• Bone Density Screening</p>
              <p>• Bloodwork</p>
              <p>• Podiatry</p>
              <p>• Talk Therapy</p>
              <p>• Home Health, Hospice, and much more.</p>
            </div>
            <br />
            <p className='servicesPointsTitle'><b>Please contact our office to schedule an appointment!</b></p>
          </SubText>
          <div id='servicesHalfWhiteSpace' />
          <h2 className='servicesTitle'>
            IN HOME ASSESSMENT SERVICES
          </h2>
          <Divider />
          <SubText>
            <p>We are currently scheduling 2019 In-Home Assessments for Molina Advantage, Emblem Healthcare, Empire Healthcare, Mountain Health Co-Op, and Montana Health Co-Op.<br /><br />Please contact <b>Lara, Sienna, Crystal, Alexa, Katie, or Milena</b> to schedule your free in-home exam!</p>
            <p>Since 2012 House Call Doctors has worked with numerous health plans to provide convenient, annual wellness check-ups in the home.</p>
            <p>These visits are requested by your insurance company to aid them in updating member information and ensuring all benefits are being utilized.</p>
            <p>During these visits our skilled and professional provider will review your diagnosis history and medications, recommend preventive screenings, take basic vital signs, and perform some point-of-care testing.</p>
            <p>There is <b>no fee</b> for these visits.</p>
            <p>Your eligibility is determined by your health plan.</p>
            <p>If you feel you are eligible for an in-home wellness check-up please contact your health plan.</p>
          </SubText>
        </div>
        <div id='servicesWhiteSpace' />
      </>
    )
  }
};

// <h3 className='servicesSubTitle'>
//   If you are interested in becoming a patient, please fill out the fields on the right & we will get back to you as openings become available.
// </h3>



export default OurServices;
