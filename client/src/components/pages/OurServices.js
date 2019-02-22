import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image, Divider } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import ContactField from '../coolStuffWorking/ContactField';


const MainContainer = Styled.div`
  max-width: 1250px;
  margin: auto;
`

const SubSection = Styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 65px;
  max-width: 1200px;
`

const Info = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  padding-left: 15px;
`

const Title = Styled.h2`
  font-weight: bold;
  padding-top: 5px;
`

const SubTitle = Styled.h3`
  margin-top: 9px;
  padding-left: 20px;
  font-size: 20px;
`

const SubText = Styled.div`
  padding-left: 40px;

  p{
    color: #515151;
    font-weight: normal;
    font-size: 16px;
  }
`

const Points = Styled.div`
  column-count: 2;
  padding-left: 100px;
`

const HalfWhiteSpace = Styled.div`
  height: 40px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {
  points:{
    paddingLeft: '20px',
  },
}


class OurServices extends Component {

  componentDidMount() {
    document.title='Our Services'
  }

  render() {
    return(
      <>
        <div>
          <Image src={HCDpageDivider} />
        </div>
        <MainContainer>
          <SubSection>
            <Info>
              <SubTitle>
                Please fill out the fields on the right & we will get back to you as openings become available.
              </SubTitle>
              <SubText>
                <p>We are still accepting new patients in Assisted Living and Group Home facilities that we already service.</p>
                <p style={styles.points}>We are currently scheduling 2018 In-Home Assessments for Molina Advantage, Emblem Healthcare, <br />Empire Healthcare, Mountain Health Co-Op, and Montana Health Co-Op.<br />Please contact <b>Lara, Sienna, Crystal, Alexa, Katie, or Milena</b> to schedule your free in-home exam!</p>
                <p style={styles.points}>Providing Primary Care in the patient’s home, assisted living, and/or group home setting.</p>
                <p style={styles.points}>Your doctor is available 24/7 by pager for existing patients and their family members, care takers, and/or nurses.</p>
              </SubText>
            </Info>
            <ContactField />
          </SubSection>
          <HalfWhiteSpace />
          <Title>
            OUR PROVIDER SERVICES
          </Title>
          <Divider />
          <HalfWhiteSpace />
          <SubText>
            <p>
              House Call Doctors has been providing primary care services to patients in assisted livings, group homes, and individual homes since 2004.  Our providers specialize in geriatrics, hospice and palliative care, dementia, and caring for disabled adults in the group home setting.   We are dedicated to our patients and strive to provide the most comprehensive and compassionate patient care   We work with a number of companies that provide services in the home.   These services include but are not limited to:
            </p>
            <Points>
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
            </Points>
            <p style={styles.points}>Please contact our office to schedule an appointment!</p>
          </SubText>
          <HalfWhiteSpace />
          <Title>
            IN HOUSE ASSESSMENT SERVICES
          </Title>
          <Divider />
          <SubText>
            <p>
              Since 2012 House Call Doctors has worked with numerous health plans to provide convenient, annual wellness check-ups in the home.  These visits are requested by your insurance company to aid them in updating member information and ensuring all benefits are being utilized.  During these visits our skilled and professional provider will review your diagnosis history and medications, recommend preventive screenings, and take basic vital signs. There is no fee for these visits. Your eligibility is determined by your health plan.  If you feel you are eligible for an in-home wellness check-up please contact your health plan.
            </p>
          </SubText>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};




export default OurServices;
