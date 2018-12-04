import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DoctorDude from '../images/doctordude.jpg';
import Styled from 'styled-components';
import '../index.css';


const styles = {
  container:{
    width: '1250px',
    margin: 'auto',
  },

  red:{
    backgroundColor: '#AF3120',
    height: '900px',
  },

  image:{
    padding: '45px 0px 0px 25px',
  },
};

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

class Home extends Component {

  componentDidMount() {
    document.title='NEW House Call Doctors UT'
  };


  render() {
    return (
      <div style={styles.red}>
        <div style={styles.container}>
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
            <Link to={`/contact`}>
              <ContactUs>CONTACT US</ContactUs>
            </Link>
          </ContactArea>
        </div>
      </div>
    );
  }
}



export default Home;
