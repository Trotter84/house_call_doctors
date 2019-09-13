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


const MapInfo = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px;
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

const DividerProfile = Styled(Divider)`
  margin: 6px 0 6px 3px;
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

const ProviderInfo = Styled.p`
  font-size: 14px;
  max-width: 350px;
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

const Directions = Styled.p`
  padding-left: 20px;
`

const TopWhiteSpace = Styled.div`
  height: 40px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`


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
        <div id='contactUsMainContainer'>
          <TopWhiteSpace />
          <MapInfo>
            <div>
              <div id='contactUsOffice'>
                <i id='contactUsIcon' className='phone square large icon color'></i>
                <p>Office Phone: <b>(801) 485-5055</b></p>
              </div>
              <div id='contactUsFax'>
                <i id='contactUsIcon' className='fax large icon color'></i>
                <p>Fax: <b>(801) 467-3296</b> or <b>(801) 363-1309</b></p>
              </div>
              <Image id='contactUsFemaleImage' src={MarkWithFemale2} alt="Mark with client"></Image>
            </div>
            <iframe title="House Call Doctors' location" width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=house%20call%20doctors%20utah&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </MapInfo>
          <Divider />
          <div id='contactUsProfileContainer'>
            {profiles.map(profile => {
              return(
                <div id='contactUsProfile'>
                  <Image src={profile.profileImage} size='tiny' />
                  <Contact>
                    <p id='contactUsNames'><br /><b>{profile.name}</b></p>
                    <DividerProfile />
                    <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
                      <Modal.Header>{profile.name}</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped src={profile.profileImage} size='tiny' />
                        <Modal.Description>
                          <InsideInfo>
                            <Left>
                              <ProviderInfo>Office MA: <b>{profile.info1}</b></ProviderInfo>
                              <ProviderInfo>Phone: <b>{profile.info2}</b></ProviderInfo>
                              <ProviderInfo>{profile.info3}</ProviderInfo>
                            </Left>
                            <Middle>
                              <ProviderInfo>Field MA: <b>{profile.info4}</b></ProviderInfo>
                              <ProviderInfo>Phone: <b>{profile.info5}</b></ProviderInfo>
                              <ProviderInfo>{profile.info6}</ProviderInfo>
                            </Middle>
                            <Right>
                              <ProviderInfo>Pager: <b>{profile.info7}</b></ProviderInfo>
                            </Right>
                          </InsideInfo>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </Contact>
                </div>
              )
            })}
          </div>

          <Divider />
          <SubTitle>
            <h2>Instructions for paging your provider:</h2>
          </SubTitle>
          <SubText>
            <p>House Call Doctors is dedicated to serving you, your family, and all of those involved in your care. We strive to provide the best medical care possible.<br />In order to ensure we are providing the highest quality of care, our providers are available 24/7 to their existing patients.</p>
            <p>Our providers are <b>always</b> available to their patients, families, nurses, and facility staff by pager.<br />In order to help ensure that you are receiving the highest quality of care:</p>
            <Directions>Dial the pager number, it will ask for a numeric message.  Dial <b>your</b> phone number, then press pound and hang up.</Directions>
            <Directions>Pagers do not accept voicemail or text messaging – Numeric pages only.</Directions>
            <Directions>All of our providers generally return pages within 15 minutes to 1 hour. <b>If you do not hear back it is very important that you page again.</b>  Every page should always be returned—if it is not it means they didn’t get your whole phone number.</Directions>
            <Directions><b>If you are paging from a facility,</b> please let your receptionist know that you are the person looking for our provider.  They only know they were paged, they don’t know who is looking for them.</Directions>
            <Directions><b>Cell phones with touch screens</b> often send too many or too few numbers to the provider’s pager. To ensure paging accuracy we recommend paging from a land line, calling our office to have our staff page the provider to your number, or following the urgent paging instructions.</Directions>
            <Directions><b>If Urgent: Page the provider and wait 5 minutes, page them again, wait 5 more minutes, and then page them a third time. This lets our providers know to stop what they are doing and call you urgently.  This also ensures that they get the correct phone number.</b></Directions>
            <Directions>Please note: our providers are never bothered by being paged. They like to know what’s going on with their patients and are very involved in each patient’s care.</Directions>
          </SubText>
        </div>
        <WhiteSpace />
      </>
    )
  }
};




export default ContactUs;
