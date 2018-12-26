import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import MarkWithPatient from '../../images/markwithpatient1.jpg';


const MainContainer = Styled.div`
  width: 1175px;
  margin: auto;
`

const Title = Styled.h2`
  font-weight: normal;
  font-size: 15px;
  padding-top: 65px;
`

const SubText = Styled.p`
  color: #515151;
  font-weight: normal;
  padding-left: 20px;
  font-size: 16px;
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
          <Image src={MarkWithPatient} />
        </div>
        <MainContainer>
          <Title>
            <h2>UNFORTUNATELY, WE ARE NOT CURRENTLY ACCEPTING HOUSE CALLS.<br />PLEASE CHECK BACK OFTEN AS THIS DOES CHANGE.</h2>
          </Title>
          <SubText>
            <p>We are still accepting new patients in Assisted Living and Group Home facilities that we already service.</p>
            <p style={styles.points}>We are currently scheduling 2018 In-Home Assessments for Molina Advantage, Emblem Healthcare, Empire Healthcare, Mountain Health Co-Op, and Montana Health Co-Op.<br />Please contact Lara, Sienna, Crystal, Alexa, Katie, or Milena to schedule your free in-home exam!</p>
            <p style={styles.points}>Providing Primary Care in the patient’s home, assisted living, and/or group home setting.</p>
            <p style={styles.points}>Your doctor is available 24/7 by pager for existing patients and their family members, care takers, and/or nurses.</p>
          </SubText>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};




export default OurServices;
