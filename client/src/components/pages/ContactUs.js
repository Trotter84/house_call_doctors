import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider,
  Modal,
} from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import MarkWithFemale2 from '../../images/MarkWithFemale2.jpg';
import profiles from '../ProfileInfo';



const MainContainer = Styled.div`
  max-width: 1250px;
  margin: auto;
`

const Info = Styled.div`
  padding-bottom: 0;

  p{
    font-weight: normal;
    font-size: 17px;
  }
`

const SubText = Styled.div`
  padding-left: 40px;

  p{
    color: #515151;
    font-weight: normal;
    font-size: 16px;
  }
`

const ProfileContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
  min-width: 1250px;
  flex-wrap: wrap;
`

const Profile = Styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100px;
  padding-bottom: 20px;
`

const Names = Styled.p`
  font-size: 14.5px;
  padding-left: 6px;
  margin-bottom: 0px;
  max-width: 350px;
`

const Contact = Styled.div`
  display: flex;
  flex-direction: column;
`

const InsideInfo = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 35px;
`

const SubTitle = Styled.div`
  padding: 5px 0 14px 0;
  h2{
    font-weight: bold;
  }
`

const InfoBtn = Styled.a`
  font-size: 13px;
  font-weight: bold;
  color: #AF3120;
  padding-left: 10px;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
    cursor: pointer;
  }
`

const Left = Styled.div`
  padding-right: 20px;
`

const Middle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px 0 20px;
`

const Right = Styled.div`
  padding-left: 20px;
`

const TopWhiteSpace = Styled.div`
  height: 40px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {
  contact:{
    paddingLeft: '150px',
  },

  female2:{
    padding: '10px 0 0 130px',
  },

  map:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '25px',
  },

  line:{
    margin: '6px 0 6px 3px',
  },

  info:{
    fontSize: '14px',
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
          <Image src={HCDpageDivider} />
        </div>
        <MainContainer>
          <TopWhiteSpace />
          <Info style={styles.map}>
            <div>
              <p style={styles.contact}>Office Phone: <b>(801) 485-5055</b></p>
              <p style={styles.contact}>Fax: <b>(801) 467-3296</b> or <b>(801) 363-1309</b></p>
              <Image style={styles.female2} src={MarkWithFemale2} />
            </div>
            <iframe title="House Call Doctors' location" width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=house%20call%20doctors%20utah&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </Info>
          <Divider />
          <ProfileContainer>
            {profiles.map(profile => {
              return(
                <Profile>
                  <Image src={profile.profileImage} size='tiny' />
                  <Contact>
                    <Names><br /><b>{profile.name}</b></Names>
                    <Divider style={styles.line} />
                    <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
                      <Modal.Header>{profile.name}</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped src={profile.profileImage} size='tiny' />
                        <Modal.Description>
                          <InsideInfo>
                            <Left>
                              <p style={styles.info}>Office MA: <b>{profile.info1}</b></p>
                              <p style={styles.info}>Phone: <b>{profile.info2}</b></p>
                              <p style={styles.info}>{profile.info3}</p>
                            </Left>
                            <Middle>
                              <p style={styles.info}>Field MA: <b>{profile.info4}</b></p>
                              <p style={styles.info}>Phone: <b>{profile.info5}</b></p>
                              <p styles={styles.info}>{profile.info6}</p>
                            </Middle>
                            <Right>
                              <p style={styles.info}>Pager: <b>{profile.info7}</b></p>
                            </Right>
                          </InsideInfo>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </Contact>
                </Profile>
              )
            })}
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
            <p style={styles.directions}>All of our providers generally return pages within 15 minutes to 1 hour. <b>If you do not hear back it is very important that you page again.</b>  Every page should always be returned—if it is not it means they didn’t get your whole phone number.</p>
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
