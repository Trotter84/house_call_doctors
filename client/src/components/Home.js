import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DoctorDude from '../images/doctordude.jpg';
import Styled from 'styled-components';
import '../index.css';


const styles = {
  red:{
    backgroundColor: '#AF3120',
    height: '900px',
  },

  image:{
    padding: '45px 0px 0px 25px',
  },

  h2:{
    fontSize: '20px',
    fontWeight: 'bold',
  },

  p:{
    color: '#878787',
  },
};

const MainContainer = Styled.div`
  width: 1250px;
  margin: auto;
`

const ContactUs = Styled.button`
  background-color: #AF3120;
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  margin: 28px 25px 0 0;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`

const ContactArea = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const ContactAreaLeft = Styled.div`
  flex: 1;
`
const SectionHeader = Styled.h1`
  color: white;
  padding: 20px 0 0 25px;
  margin-bottom: 5px;
  font-weight: normal;
`

const Section = Styled.h3`
  color: white;
  padding: 0px 25px;
  margin: 0;
  font-weight: normal;
`

const Info = Styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Visits = Styled.div`
  width: 30%;
  margin-right: 15px;
`

const Living = Styled.div`
  width: 30%;
  margin-right: 15px;
`

const Homes = Styled.div`
  width: 30%;
  margin-right: 15px;
`

const Icon = Styled.i`
  color: #AF3120;
`

class Home extends Component {

  componentDidMount() {
    document.title='NEW House Call Doctors UT'
  };


  render() {
    return (
      <>
        <div style={styles.red}>
          <MainContainer>
              <Image style={styles.image} src={DoctorDude} />
            <ContactArea>
              <ContactAreaLeft>
                <SectionHeader>
                  THANK YOU FOR VISITING HOUSE CALL DOCTORS.
                </SectionHeader>
                <Section>
                  WE ARE DEDICATED TO PROVIDING BETTER PATIENT-FOCUSED PRIMARY CARE TO THE UNDERSERVED AND HOME LIMITED POPULATION.
                </Section>
              </ContactAreaLeft>
              <Link to={`/contact-us`}>
                <ContactUs>CONTACT US</ContactUs>
              </Link>
            </ContactArea>
          </MainContainer>
        </div>

        <MainContainer>
          <Info>
            <Visits>
              <Icon>
                <i class='home huge icon color' />
              </Icon>
              <h2 style={styles.h2}>HOME VISITS</h2>
              <p style={styles.p}>
                We are not currently accepting new house call patients, but please call our office or check in often as this does change frequently based on provider availability.
              </p>
            </Visits>
            <Living>
              <Icon>
                <i class='doctor huge icon color' />
              </Icon>
              <h2 style={styles.h2}>ASSISTED LIVING</h2>
              <p style={styles.p}>
                Our providers currently care for patients in more than 25 Assisted Living facilities across Salt Lake, Utah, and Davis Counties. <Link to={`/contact-us`}>Call us</Link> today to see if a provider is in your facility.
              </p>
            </Living>
            <Homes>
              <Icon>
                <i class='hospital huge icon color' />
              </Icon>
              <h2 style={styles.h2}>GROUP HOMES</h2>
              <p style={styles.p}>
                Our providers specialize in taking care of disabled persons in the Group Home setting. <Link to={`/contact-us`}>Call us</Link> today for an appointment.
              </p>
            </Homes>
          </Info>
        </MainContainer>

      </>
    );
  }
}



export default Home;
