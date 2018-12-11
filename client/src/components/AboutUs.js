import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import MarkWithPatient from '../images/markwithpatient1.jpg';
import GroupPhoto from '../images/groupphoto.jpg';


const MainContainer = Styled.div`
  width: 1250px;
  margin: auto;
`

const Title = Styled.h2`
  font-weight: bold;
  padding-top: 25px;
  display: flex;
  justify-content: center;
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
  padding: 30px 30px 20px 0;
`

const SubTitle = Styled.h2`
  font-weight: bold;
  padding-top: 5px;
`


const SubText = Styled.p`
  color: #515151;
  font-weight: bold;
  padding: 0 0 25px 20px;
`

const SubText2 = Styled.h2`

`

const styles = {
  contacts:{
    paddingLeft: '20px',
  },

  whiteSpace:{
    height: '60px',
  },
}

class AboutUs extends Component {

render() {
  return(
    <>
      <div>
        <Image src={MarkWithPatient} />
      </div>
      <MainContainer>
        <Title>
          <h2>YOUR GUIDE TO BETTER HEALTHCARE</h2>
        </Title>
        <FlexBox>
          <AllText>
            <SubTitle>
              <h2>OUR OFFICE</h2>
            </SubTitle>
            <SubText>
              <p>Our office is open from 9:00 am to 4:00 pm</p>
              <p>Avoid the inconvenience of going to a doctor’s office.<br />Get the quality of care you deserve in the comfort of your own home.</p>
            </SubText>
            <SubText2>
              <h2>Primary Care in the home is our specialty</h2>
            </SubText2>
            <SubText>
              <p>After hours, weekends, and holidays:<br />(Our providers are always available via pager!)</p>
              <p style={styles.contacts}>Mark Cacciamani, MD 801-241-4483</p>
              <p style={styles.contacts}>Perrine Anderson, APRN 801-241-0623</p>
              <p style={styles.contacts}>Sandra Jense APRN 801-241-0255</p>
              <p style={styles.contacts}>Rita Rutland, APRN 801-241-0339</p>
              <p>These are numeric pagers, they do not accept voicemail or text messages.</p>
              <p>After dialing the pager number, dial your own phone number followed by the pound key.<br />Please allow 15-30 minutes for a return call, and repeat the process every 30 minutes until your call is returned.</p>
            </SubText>
            <SubText2>
              <h2>Taking The Next Steps</h2>
            </SubText2>
            <SubText>
              <p>For appointments, call our office at 801-485-5055.<br />We have set aside a special day each month to visit you at your home or the facility where you reside.</p>
              <p>If you are a new patient, please fill out our NEW PATIENT REGISTRATION and return to our office 48 hours prior to your first appointment.<br />This packet will help your doctor gather pertinent health information about you so that he/she can better focus on your issues today.</p>
              <p>For fastest results, have your pharmacy fax us your refill requests to 801-363-1398 or 801-467-3296.<br />Please allow 48-72 hours for a response.</p>
            </SubText>
            <div style={styles.whiteSpace}>
            </div>
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
