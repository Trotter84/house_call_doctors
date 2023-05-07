import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import GroupPhoto from '../../images/groupphoto.jpg';


class AboutUs extends Component {

  componentDidMount() {
    document.title='About Us'
  }

render() {
  return(
    <>
      <h1 className='pageTitleReader' aria-label="About Us page">About Us</h1>
      
      <Image id='image-divider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
   
      <div className='mainContainerAboutUs'>
        <h2 className='titleAboutUs'>YOUR GUIDE TO BETTER HEALTHCARE</h2>
        <div className='containerAboutUs'>

          <div className='leftHalfAboutUs'>

            <h3 className='subTitleAboutUs'>Where It All Started</h3>
              <div className='subTextContainerAboutUs'>
                <p className='subTextAboutUs'>
                  Dr. Mark Cacciamani began his medical career in a clinic setting where he was often unable to spend adequate time with his patients.<br />He realized during this clinical experience that his place was not with the "worried well" and he wanted to make a bigger difference in healthcare.<br /><br />He founded House Call Doctors in 2004 which allowed him to serve home-bound patients that would not otherwise have access to adequate health care.<br />Dr. Cacciamani's passion to bring better health care to the home-bound population is instilled in all of House Call Doctors' staff and we strive to better the quality of life for each of our patients.
                </p>
              </div>

              <h3 className='subTitleAboutUs'>Primary Care in the home is our specialty</h3>
              <div className='subTextContainerAboutUs'>
                <p className='subTextAboutUs'>After hours, weekends, and holidays:<br />(Our providers are always available via pager!)</p>
                <p className='contactsAboutUs'><b>Mark Cacciamani</b>, MD <b>(801) 241-4483</b></p>
                <p className='contactsAboutUs'><b>Perrine Anderson</b>, APRN <b>(801) 241-0623</b></p>
                <p className='contactsAboutUs'><b>Courtney Harper</b>, PA-C <b>(801) 241-0255</b></p>
                <p className='contactsAboutUs'><b>Gwen Mitchell</b>, APRN <b>(801) 241-0339</b></p>
                <p className='contactsAboutUs'><b>Edie Shepherd</b>, APRN <b>(801) 241-0021</b></p>
                <p className='contactsAboutUs'><b>Trenaisa Nay</b>, GNP <b>(801) 241-0484</b></p>
                <p className='subTextAboutUs'>These are numeric pagers, they do not accept voicemail or text messages.</p>
                <p className='subTextAboutUs'>After dialing the pager number, dial your own phone number followed by the pound key.</p>
                <p className='subTextAboutUs'>Please allow 15-30 minutes for a return call, and repeat the process every 30 minutes until your call is returned.</p>
              </div>

              <h3 className='subTitleAboutUs'>Taking The Next Steps</h3>
              <div className='subTextContainerAboutUs'>
                <p className='subTextAboutUs'>For appointments, call our office at <b>801-485-5055</b>.<br />We have set aside a special day each month to visit you at your home or the facility where you reside.</p>
                <p className='subTextAboutUs'>If you are interested in becoming a new patient, please contact our office to obtain a copy of our <b>New Patient Registration</b> and return to our office 48 hours prior to your first appointment.<br /><br />This packet will help your doctor gather pertinent health information about you so that he/she can better focus on your issues today.</p>
                <p className='subTextAboutUs'>For fastest results, have your pharmacy fax us your refill requests <b>801-467-3296</b>.<br />Please allow 24-48 business hours for a response.</p>
              </div>

              <div className='whiteSpaceAboutUs'></div>
            
            </div>

          <div className='rightHalfAboutUs'>
            
              <Image src={GroupPhoto} id='photoAboutUs' alt='photo of House Call Doctors staff' />
          
            <h3 className='officeTitle subTitleAboutUs'>Our Office</h3>
            <div className='officeText subTextContainerAboutUs'>
              <p className='subTextAboutUs'>Our office is open from <b>9:00 am</b> to <b>4:00 pm</b></p>
              <p className='subTextAboutUs'>Avoid the inconvenience of going to a doctor’s office.<br />Get the quality of care you deserve in the comfort of your own home.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
};

export default AboutUs;
