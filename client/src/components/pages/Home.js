import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FrontPageImage from '../coolStuffWorking/FrontPageImage';
import Styled from 'styled-components';
import Testimonials from '../coolStuffWorking/Testimonials';
import '../../index.css';



const MainContainer = Styled.div`
  max-width: 1250px;
  margin: auto;
`

const RedContainer = Styled.div`
  background-color: #AF3120;
  height: 850px;
`

const CarouselContainer = Styled.div`
  max-height: 600px;
  max-width: 1166px;
  padding: 45px 0 0 0;
`

const ContactUsLink = Styled(Link)`
  padding: 60px;
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
  flex-wrap: wrap;
`

const ContactAreaLeft = Styled.div`
  flex: 1;
`
const SectionHeader = Styled.h1`
  color: white;
  padding: 80px 0 0 25px;
  margin-bottom: 5px;
  font-weight: normal;
`

const Section = Styled.h3`
  color: white;
  padding: 0px 25px;
  margin: 0;
  font-weight: normal;
`

const SubTitle = Styled.h2`
  font-size: 22px;
  font-weight: bold;
`

const SubText = Styled.p`
  color: #494949;
  font-size: 16px;
`

const Info = Styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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

const StyledLink = Styled(Link)`
  font-size: 15px;
  color: #AF3120;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
  }
`

const HalfWhiteSpace = Styled.div`
  height: 50px;
`

const WhiteSpace = Styled.div`
  height: 120px;
`


class Home extends Component {

  componentDidMount() {
    document.title='House Call Doctors UT'
  };

  render() {
    return (
      <>
        <RedContainer>
          <MainContainer>
            <CarouselContainer className='CarouselContainer'>
              <FrontPageImage />
            </CarouselContainer>
            <ContactArea>
              <ContactAreaLeft>
                <SectionHeader>
                  THANK YOU FOR VISITING HOUSE CALL DOCTORS.
                </SectionHeader>
                <Section>
                  WE ARE DEDICATED TO PROVIDING BETTER PATIENT-FOCUSED PRIMARY CARE TO THE UNDERSERVED AND HOME LIMITED POPULATION.
                </Section>
              </ContactAreaLeft>
              <ContactUsLink to={`/contact-us`}>
                <ContactUs>CONTACT US</ContactUs>
              </ContactUsLink>
            </ContactArea>
          </MainContainer>
        </RedContainer>

        <MainContainer>
          <Info>
            <Visits>
              <Icon>
                <i className='home huge icon color' />
              </Icon>
              <SubTitle>HOME VISITS</SubTitle>
              <SubText>
                We <b>are</b> currently accepting new house call patients, please call our office or check in often as this does change frequently based on provider availability.
              </SubText>
            </Visits>
            <Living>
              <Icon>
                <i className='doctor huge icon color' />
              </Icon>
              <SubTitle>ASSISTED LIVING</SubTitle>
              <SubText>
                Our providers currently care for patients in more than 50 Assisted Livings, Group Homes, and Memory Care facilities across Salt Lake, Utah, and Davis Counties. <StyledLink to={`/contact-us`}>Call us</StyledLink> today to see if a provider is in your facility.
              </SubText>
            </Living>
            <Homes>
              <Icon>
                <i className='hospital huge icon color' />
              </Icon>
              <SubTitle>GROUP HOMES</SubTitle>
              <SubText>
                Our providers specialize in taking care of disabled persons in the Group Home setting. <StyledLink to={`/contact-us`}>Call us</StyledLink> today for an appointment.
              </SubText>
            </Homes>
          </Info>
          <HalfWhiteSpace />
          <Testimonials />
        </MainContainer>
        <WhiteSpace />
      </>
    );
  }
}



export default Home;
