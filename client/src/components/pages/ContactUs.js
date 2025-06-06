import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider,
  Modal,
} from 'semantic-ui-react';
import HCDpageDivider2 from '../../images/HCD_group_divider.jpg';
import ContactField from '../coolStuffWorking/ContactField';
import TrenaisaWithPatient from '../../images/Trenaisa_with_patient.jpg';
import profiles from '../ProfileInfo';


const InfoBtn = Styled.button`
  background-color: white;
  border: none;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
    cursor: pointer;
  }
`


class ContactUs extends Component {

  componentDidMount() {
    document.title = 'Contact Us'
  }

  render() {
    return (
      <>
        <h1 className='pageTitleReader' aria-label="Contact Us page">Contact Us</h1>
        <Image id='image-divider' src={HCDpageDivider2} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='mainContainerContactUs'>
          <div id='mapInfoContactUs'>
            <div className='phoneInfo infoContactUs'>
              <i className='phone square big icon color'></i>
              <p>Office Phone: <b>(801) 485-5055</b></p>
            </div>
            <div className='faxInfo infoContactUs'>
              <i className='fax big icon color'></i>
              <p>Fax: <b>(801) 467-3296</b> or <b>(801) 363-1309</b></p>
            </div>
            <iframe title="House Call Doctors' location" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.171489272965!2d-111.87755440000001!3d40.7582528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f56a553b0015%3A0xee6690693324d3da!2s466%20E%20500%20S%20%23200%2C%20Salt%20Lake%20City%2C%20UT%2084111!5e0!3m2!1sen!2sus!4v1736794199299!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div id='contactFieldPlacement'>
              <ContactField />
            </div>
            {/* <img src={MarkWithFemale2} alt="Mark with client"></img> */}
          </div>
          <Divider />
          <div alt="list of providers and more info on each" id='profileContainerContactUs'>
            {profiles.map(profile => {
              return (
                <div id='contactUsProfile'>
                  <Image src={profile.profileImage} alt={`Profile of ${profile.shortName}`} size='tiny' />
                  <div id='contactUsContact'>
                    <p id='contactUsNames'><br /><b>{profile.name}</b></p>
                    <div id='contactUsDividerProfile' />
                    <Modal id='modalContainer' alt="More info about provider" trigger={<InfoBtn id='contactUsInfoBtn'>More Info</InfoBtn>} closeIcon>
                      <Modal.Header>{profile.name}</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped src={profile.profileImage} size='small' />
                        <Modal.Description>
                          <div id='contactUsInsideInfo'>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Office MA:</p>
                              <p className='contactUsProviderInfo'><b>{profile.officeName}</b></p>
                              <p className='contactUsProviderInfo'>Phone: <b>{profile.officePhone}</b></p>
                              <p className='contactUsProviderInfo'>{profile.officeEmail}</p>
                            </div>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Clinical MA's:</p>
                              <p className='contactUsProviderInfo'><b>{profile.clinicalName}</b></p>
                              <p className='contactUsProviderInfo'>Phone: <b>{profile.clinicalPhone}</b></p>
                              <p className='contactUsProviderInfo'>{profile.clinicalEmail}</p>
                            </div>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Pager: <b>{profile.pager}</b></p>
                            </div>
                          </div>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
              )
            })}
          </div>

          <Divider />
          <div id='contactUsBottomContainer'>
            <img id='contactUsPhoto' src={TrenaisaWithPatient} alt='employee with patient' />

            <div id='contactUsSubText'>
              <h3>Instructions for paging your provider:</h3>
              <p>House Call Doctors is dedicated to serving you, your family, and all of those involved in your care. We strive to provide the best medical care possible.<br />In order to ensure we are providing the highest quality of care, our providers are available 24/7 to their existing patients.</p>
              <p>Our providers are <b>always</b> available to their patients, families, nurses, and facility staff by pager.<br />In order to help ensure that you are receiving the highest quality of care:</p>
              <p className='directions'>Dial the pager number, it will ask for a numeric message.  Dial <b>your</b> phone number, then press pound and hang up.</p>
              <p className='directions'>Pagers do not accept voicemail or text messaging – Numeric pages only.</p>
              <p className='directions'>All of our providers generally return pages within 15 minutes to 1 hour. <b>If you do not hear back it is very important that you page again.</b>  Every page should always be returned—if it is not it means they didn’t get your whole phone number.</p>
              <p className='directions'><b>If you are paging from a facility,</b> please let your receptionist know that you are the person looking for our provider.  They only know they were paged, they don’t know who is looking for them.</p>
              <p className='directions'><b>Cell phones with touch screens</b> often send too many or too few numbers to the provider’s pager. To ensure paging accuracy we recommend paging from a land line, calling our office to have our staff page the provider to your number, or following the urgent paging instructions.</p>
              <p className='directions'><b>If Urgent: Page the provider and wait 5 minutes, page them again, wait 5 more minutes, and then page them a third time. This lets our providers know to stop what they are doing and call you urgently.  This also ensures that they get the correct phone number.</b></p>
              <p className='directions'>Please note: our providers are never bothered by being paged. They like to know what’s going on with their patients and are very involved in each patient’s care.</p>
            </div>
          </div>
        </div>
        <div id='contactUsWhiteSpace'></div>
      </>
    )
  }
};




export default ContactUs;
