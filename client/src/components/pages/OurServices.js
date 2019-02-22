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

const Title = Styled.h3`
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
              <Title>
                Please fill out the fields on the right & we will get back to you as openings become available.
              </Title>
              <SubText>
                <p>We are still accepting new patients in Assisted Living and Group Home facilities that we already service.</p>
                <p style={styles.points}>We are currently scheduling 2018 In-Home Assessments for Molina Advantage, Emblem Healthcare, <br />Empire Healthcare, Mountain Health Co-Op, and Montana Health Co-Op.<br />Please contact <b>Lara, Sienna, Crystal, Alexa, Katie, or Milena</b> to schedule your free in-home exam!</p>
                <p style={styles.points}>Providing Primary Care in the patient’s home, assisted living, and/or group home setting.</p>
                <p style={styles.points}>Your doctor is available 24/7 by pager for existing patients and their family members, care takers, and/or nurses.</p>
              </SubText>
            </Info>
            <ContactField />
          </SubSection>
          <WhiteSpace />
          <Divider />
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};




export default OurServices;
