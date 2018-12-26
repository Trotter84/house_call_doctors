import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider,
  Embed
} from 'semantic-ui-react';
import MarkWithPatient from '../../images/markwithpatient1.jpg';
import MarkProfile from '../../images/Mark-profile.png';
import PerrineProfile from '../../images/Perrine-profile.png';
import SandraProfile from '../../images/Sandra-profile.png';
import RitaProfile from '../../images/Rita-profile.png';
import MarkWithFemale2 from '../../images/MarkWithFemale2.jpg';
import MarkWithMale from '../../images/MarkWithMale.jpg';


const MainContainer = Styled.div`
  width: 1175px;
  margin: auto;
`

const Info = Styled.p`
  font-weight: normal;
  font-size: 17px;
  padding-bottom: 0;
`

const Title = Styled.p`
  font-weight: normal;
  font-size: 17px;
`

const SubText = Styled.p`
  color: #515151;
  font-weight: normal;
  padding-left: 40px;
  font-size: 16px;
`

const ProfileContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
`

const Profile = Styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100px;
  padding-bottom: 20px;
`

const SubTitle = Styled.h2`
  font-weight: bold;
  padding-top: 5px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {
  contact:{
    paddingLeft: '20px',
  },

  female2:{
    padding: '10px 0 0 150px',
  },

  map:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  info:{
    fontSize: '14px',
    paddingLeft: '5px',
    maxWidth: '350px',
  },

  directions:{
    paddingLeft: '20px',
  },
}

class ContactUs extends Component {

  componentDidMount() {
    document.title='Contact Us'
  }

  render() {
    return(
      <>
        <div>
          <Image src={MarkWithPatient} />
        </div>
        <MainContainer>
          <WhiteSpace>
          </WhiteSpace>
          <Info style={styles.map}>
            <div>
              <p style={styles.contact}>Office Phone: <b>(801) 485-5055</b></p>
              <p style={styles.contact}>Fax: <b>(801) 467-3296</b> or <b>(801) 363-1309</b></p>
              <Image style={styles.female2} src={MarkWithFemale2} />
            </div>
            <iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=house%20call%20doctors%20utah&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </Info>
          <Divider />
          <ProfileContainer>
            <Profile>
              <Image src={MarkProfile} size='tiny' />
              <p style={styles.info}><br /><b>Mark Cacciamani, MD</b><br />Pager: (801) 241-4483<br /><a href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</a></p>
            </Profile>
            <Profile>
              <Image src={PerrineProfile} size='tiny' />
              <p style={styles.info}><br /><b>Perrine Anderson, GNP</b><br />Pager: (801) 241-0623<br /><a href="mailto:SarahJohnson@housecalldoctorsut.com">SarahJohnson@housecalldoctorsut.com</a></p>
            </Profile>
            <Profile>
              <Image src={SandraProfile} size='tiny' />
              <p style={styles.info}><br /><b>Sandra Jense, APRN</b><br />Pager: (801) 241-0255<br /><a href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</a></p>
            </Profile>
            <Profile>
              <Image src={RitaProfile} size='tiny' />
              <p style={styles.info}><br /><b>Rita Rutland, APRN</b><br />Pager: (801) 241-0339<br /><a href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</a></p>
            </Profile>
          </ProfileContainer>
          <Divider />
          <SubTitle>
            <h2>Instructions for paging your provider:</h2>
          </SubTitle>
          <SubText>
            <p>House Call Doctors is dedicated to serving you, your family, and all of those involved in your care. We strive to provide the best medical care possible.<br />In order to ensure we are providing the highest quality of care, our providers are available 24/7 to their existing patients.</p>
            <p>Our providers are <b>always</b> available to their patients, families, nurses, and facility staff by pager.<br />In order to help ensure that you are receiving the highest quality of care:</p>
            <p style={styles.directions}>Dial the pager number, it will ask for a numeric message.  Dial <b>your</b> phone number, then press pound and hang up.</p>
            <p style={styles.directions}>Pagers do not accept voicemail or text messaging – Numeric pages only.</p>
            <p style={styles.directions}>Dr. Cacciamani, Perrine Anderson APRN, and Sandra Jense APRN, Rita Rutland APRN generally return pages within 15 minutes to 1 hour. <b>If you do not hear back it is very important that you page again.</b>  Every page should always be returned—if it is not it means they didn’t get your whole phone number.</p>
            <p style={styles.directions}><b>If you are paging from a facility,</b> please let your receptionist know that you are the person looking for our provider.  They only know they were paged, they don’t know who is looking for them.</p>
            <p style={styles.directions}><b>Cell phones with touch screens</b> often send too many or too few numbers to the provider’s pager. To ensure paging accuracy we recommend paging from a land line, calling our office to have our staff page the provider to your number, or following the urgent paging instructions.</p>
            <p style={styles.directions}><b>If Urgent: Page the provider and wait 5 minutes, page them again, wait 5 more minutes, and then page them a third time. This lets our providers know to stop what they are doing and call you urgently.  This also ensures that they get the correct phone number.</b></p>
            <p style={styles.directions}>Please note: our providers are never bothered by being paged. They like to know what’s going on with their patients and are very involved in each patient’s care.</p>
          </SubText>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};




export default ContactUs;
