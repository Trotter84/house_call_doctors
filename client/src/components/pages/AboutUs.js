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
      <div id='imageDividerContainer'>
        <Image id='imageDivider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
      </div>
      <div id='aboutUsMainContainer'>
        <div id='aboutUsTitleContainer'>
          <h2 id='aboutUsTitle'>YOUR GUIDE TO BETTER HEALTHCARE</h2>
        </div>
        <div id='aboutUsFlexBox'>
          <div id='aboutUsAllText'>
            <h2 className='aboutUsSubTitle'>
              Our Office
            </h2>
            <div className='aboutUsSubTextContainer'>
              <p className='aboutUsSubText'>Our office is open from <b>9:00 am</b> to <b>4:00 pm</b></p>
              <p className='aboutUsSubText'>Avoid the inconvenience of going to a doctor’s office.<br />Get the quality of care you deserve in the comfort of your own home.</p>
            </div>
            <h2 className='aboutUsSubTitle'>
              Primary Care in the home is our specialty
            </h2>
            <div className='aboutUsSubTextContainer'>
              <p className='aboutUsSubText'>After hours, weekends, and holidays:<br />(Our providers are always available via pager!)</p>
              <p className='aboutUsContacts'><b>Mark Cacciamani</b>, MD <b>(801) 241-4483</b></p>
              <p className='aboutUsContacts'><b>Perrine Anderson</b>, APRN <b>(801) 241-0623</b></p>
              <p className='aboutUsContacts'><b>Courtney Harper</b>, PA-C <b>(801) 241-0255</b></p>
              <p className='aboutUsContacts'><b>Gwen Mitchell</b>, APRN <b>(801) 241-0339</b></p>
              <p className='aboutUsContacts'><b>Edie Shepherd</b>, APRN <b>(801) 241-0021</b></p>
              <p className='aboutUsContacts'><b>Trenaisa Nay</b>, GNP <b>(801) 241-0484</b></p>
              <p className='aboutUsSubText'>These are numeric pagers, they do not accept voicemail or text messages.</p>
              <p className='aboutUsSubText'>After dialing the pager number, dial your own phone number followed by the pound key.</p>
              <p className='aboutUsSubText'>Please allow 15-30 minutes for a return call, and repeat the process every 30 minutes until your call is returned.</p>
            </div>
            <h2 className='aboutUsSubTitle'>
              Taking The Next Steps
            </h2>
            <div className='aboutUsSubTextContainer'>
              <p className='aboutUsSubText'>For appointments, call our office at <b>801-485-5055</b>.<br />We have set aside a special day each month to visit you at your home or the facility where you reside.</p>
              <p className='aboutUsSubText'>If you are interested in becoming a new patient, please contact our office to obtain a copy of our <b>New Patient Registration</b> and return to our office 48 hours prior to your first appointment.<br /><br />This packet will help your doctor gather pertinent health information about you so that he/she can better focus on your issues today.</p>
              <p className='aboutUsSubText'>For fastest results, have your pharmacy fax us your refill requests <b>801-467-3296</b>.<br />Please allow 24-48 business hours for a response.</p>
            </div>
            <h2 className='aboutUsSubTitle'>
              Where It All Started
            </h2>
            <div className='aboutUsSubTextContainer'>
              <p className='aboutUsSubTextBottom'>
                Dr. Mark Cacciamani began his medical career in a clinic setting where he was often unable to spend adequate time with his patients.<br />He realized during this clinical experience that his place was not with the "worried well" and he wanted to make a bigger difference in healthcare.<br /><br />He founded House Call Doctors in 2004 which allowed him to serve home-bound patients that would not otherwise have access to adequate health care.<br />Dr. Cacciamani's passion to bring better health care to the home-bound population is instilled in all of House Call Doctors' staff and we strive to better the quality of life for each of our patients.
              </p>
            </div>
            <div className='aboutUsWhiteSpace'></div>
          </div>
          <div id='aboutUsPhoto'>
            <Image src={GroupPhoto} alt='photo of House Call Doctors staff' />
          </div>
        </div>
        <div id='aboutUsWhiteSpaceBottom'></div>

      </div>
    </>
  )
}
};

export default AboutUs;
