import React, { Component } from 'react';
import Styled from 'styled-components';
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
      <div>
        <Image src={HCDpageDivider} />
      </div>
      <div id='mainContainer'>
        <h2 id='title'>
          YOUR GUIDE TO BETTER HEALTHCARE
        </h2>
        <div id='flexBox'>
          <div id='allText'>
            <h2 className='subTitle'>
              Our Office
            </h2>
            <div className='subTextContainer'>
              <p className='subText'>Our office is open from <b>9:00 am</b> to <b>4:00 pm</b></p>
              <p className='subText'>Avoid the inconvenience of going to a doctor’s office.<br />Get the quality of care you deserve in the comfort of your own home.</p>
            </div>
            <h2 className='subTitle'>
              Primary Care in the home is our specialty
            </h2>
            <div className='subTextContainer'>
              <p className='subText'>After hours, weekends, and holidays:<br />(Our providers are always available via pager!)</p>
              <p className='contacts'><b>Mark Cacciamani</b>, MD <b>(801) 241-4483</b></p>
              <p className='contacts'><b>Perrine Anderson</b>, APRN <b>(801) 241-0623</b></p>
              <p className='contacts'><b>Sandra Jense</b>, APRN <b>(801)241-0255</b></p>
              <p className='contacts'><b>Rita Rutland</b>, APRN <b>(801) 241-0339</b></p>
              <p className='contacts'><b>Edie Shepherd</b>, APRN <b>(801) 241-0021</b></p>
              <p className='subText'>These are numeric pagers, they do not accept voicemail or text messages.</p>
              <p className='subText'>After dialing the pager number, dial your own phone number followed by the pound key.</p>
              <p className='subText'>Please allow 15-30 minutes for a return call, and repeat the process every 30 minutes until your call is returned.</p>
            </div>
            <h2 className='subTitle'>
              Taking The Next Steps
            </h2>
            <div className='subTextContainer'>
              <p className='subText'>For appointments, call our office at <b>801-485-5055</b>.<br />We have set aside a special day each month to visit you at your home or the facility where you reside.</p>
              <p className='subText'>If you are interested in becoming a new patient, please contact our office to obtain a copy of our <b>New Patient Registration</b> and return to our office 48 hours prior to your first appointment.<br /><br />This packet will help your doctor gather pertinent health information about you so that he/she can better focus on your issues today.</p>
              <p className='subText'>For fastest results, have your pharmacy fax us your refill requests<br /> to <b>801-363-1398</b> or <b>801-467-3296</b>.<br />Please allow 24-48 business hours for a response.</p>
            </div>
            <h2 className='subTitle'>
              Where It All Started
            </h2>
            <div id='subTextContainer'>
              <p className='subText'>
                Dr. Mark Cacciamani began his medical career in a clinic setting where he was often unable to spend adequate time with his patients.<br />He realized during this clinical experience that his place was not with the "worried well" and he wanted to make a bigger difference in healthcare.<br /><br />He founded House Call Doctors in 2004 which allowed him to serve home-bound patients that would not otherwise have access to adequate health care.<br />Dr. Cacciamani's passion to bring better health care to the home-bound population is instilled in all of House Call Doctors' staff and we strive to better the quality of life for each of our patients.
              </p>
            </div>
            <div className='whiteSpace'></div>
          </div>
          <div id='photo'>
            <div>
              <Image src={GroupPhoto} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
};

export default AboutUs;
