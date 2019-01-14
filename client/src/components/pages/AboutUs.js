import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import GroupPhoto from '../../images/groupphoto.jpg';


const MainContainer = Styled.div`
  max-width: 1175px;
  margin: auto;
`

const Title = Styled.h2`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`

const FlexBox = Styled.div`
  display: flex;
  flex-direction: row;
`

const AllText = Styled.div`
  display: flex;
  flex-direction: column;
`

const Photo = Styled.div`
  padding: 30px 30px 20px 20px;
  width: 900px;
`

const SubTitle = Styled.h2`
    padding-top: 5px;
    font-weight: bold;
`

const SubText = Styled.div`
  padding-left: 20px;

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
  contacts:{
    paddingLeft: '20px',
  },
}

class AboutUs extends Component {

  componentDidMount() {
    document.title='About Us'
  }

render() {
  return(
    <>
      <div>
        <Image src={HCDpageDivider} />
      </div>
      <MainContainer>
        <Title>
          YOUR GUIDE TO BETTER HEALTHCARE
        </Title>
        <FlexBox>
          <AllText>
            <SubTitle>
              Our Office
            </SubTitle>
            <SubText>
              <p>Our office is open from <b>9:00 am</b> to <b>4:00 pm</b></p>
              <p>Avoid the inconvenience of going to a doctor’s office.<br />Get the quality of care you deserve in the comfort of your own home.</p>
            </SubText>
            <SubTitle>
              Primary Care in the home is our specialty
            </SubTitle>
            <SubText>
              <p>After hours, weekends, and holidays:<br />(Our providers are always available via pager!)</p>
              <p style={styles.contacts}><b>Mark Cacciamani</b>, MD <b>801-241-4483</b></p>
              <p style={styles.contacts}><b>Perrine Anderson</b>, APRN <b>801-241-0623</b></p>
              <p style={styles.contacts}><b>Sandra Jense</b>, APRN <b>801-241-0255</b></p>
              <p style={styles.contacts}><b>Rita Rutland</b>, APRN <b>801-241-0339</b></p>
              <p>These are numeric pagers, they do not accept voicemail or text messages.</p>
              <p>After dialing the pager number, dial your own phone number followed by the pound key.<br />Please allow 15-30 minutes for a return call, and repeat the process every 30 minutes until your call is returned.</p>
            </SubText>
            <SubTitle>
              Taking The Next Steps
            </SubTitle>
            <SubText>
              <p>For appointments, call our office at <b>801-485-5055</b>.<br />We have set aside a special day each month to visit you at your home or the facility where you reside.</p>
              <p>If you are a new patient, please fill out our <b>NEW PATIENT REGISTRATION</b> and return to our office 48 hours prior to your first appointment.<br />This packet will help your doctor gather pertinent health information about you so that he/she can better focus on your issues today.</p>
              <p>For fastest results, have your pharmacy fax us your refill requests<br /> to <b>801-363-1398</b> or <b>801-467-3296</b>.<br />Please allow 48-72 hours for a response.</p>
            </SubText>
            <WhiteSpace />
          </AllText>
          <Photo>
            <div>
              <Image src={GroupPhoto} />
            </div>
          </Photo>
        </FlexBox>
      </MainContainer>
    </>
  )
}
};

export default AboutUs;
