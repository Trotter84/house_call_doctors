import React, { Component } from 'react';
import { Image, Divider, Icon } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form';
import Styled from 'styled-components';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';


const Email = Styled.a`
  color: black;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

class OurServices extends Component {

  componentDidMount() {
    document.title='Our Services'
  }

  render() {
    return(
      <>
        <h1 className='pageTitleReader' aria-label="Our Services page">Our Services</h1>
        <Image id='image-divider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='servicesMainContainer'>
          <div id='servicesSubSection'>
            <div id='servicesInfo'>
              <h3 className='servicesSubTitle'>
                If you are interested in becoming a patient, please fill out the fields on the right & we will get back to you as openings become available.
              </h3>
              <div className='servicesSubTextContainer'>
                <p className='servicesSubText'>Our providers see patients in Assisted Living Facilities, Memory Care Units, Group Homes, and Individual Homes.</p>
              </div>
            </div>
            <div id='contactFieldMainContainer'>


              {/* <NetlifyForm name="Contact" method="POST" data-netlify="true">
                {({ loading, error, success }) => (
                  <div>
                    {loading &&
                      <div id='contactFieldLoading'>Loading  <Icon loading name='spinner' /></div>
                    }
                    {error &&
                      <div id='contactFieldError'>Your information was not sent. Please try again later.</div>
                    }
                    {success &&
                      <div id='contactFieldSuccess'>Thank you for contacting us!</div>
                    }
                    {!loading && !success &&

                      <div id='contactFieldInputField'>
                        <div id='contactFieldNames'>
                          <div id='contactFieldFirst'>
                            <label htmlFor="fname">First Name*</label>
                            <input type="text" id="fname" name="firstname" required />
                          </div>
                          <div id='contactFieldLast'>
                            <label htmlFor="lname">Last Name*</label>
                            <input type="text" id="lname" name="lastname" required />
                          </div>
                        </div>
                        <div id='contactFieldEmail'>
                          <label htmlFor="email">Email*</label>
                          <input type="email" id="email" name="email" placeholder="example@domain.com" required />
                        </div>
                        <div id='contactFieldPhone'>
                          <label htmlFor="phone">Phone Number</label>
                          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="1233456789" />
                        </div>
                        <div id='contactFieldMessage'>
                          <label htmlFor="subject">Message*</label>
                          <textarea id="subject" name="subject" placeholder="How can we help?.." required></textarea>
                        </div>
                        <div id='contactFieldSubmit'>
                          <button type="submit">Send</button>
                        </div>
                        <p id='contactFieldRequired'>* required</p>
                      </div>
                    }
                  </div>
                )}
              </NetlifyForm> */}


            </div>
          </div>
          <div id='servicesQuarterWhiteSpace' />
          <h2 className='servicesTitle'>
            PRIMARY CARE SERVICES
          </h2>
          <Divider />
          <div id='servicesHalfWhiteSpace' />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>
              House Call Doctors has been providing primary care services to patients in assisted livings, group homes, and individual homes since 2004.<br />Our providers specialize in geriatrics, hospice and palliative care, dementia, and caring for disabled adults in the group home setting.<br />We are dedicated to our patients and strive to provide the most comprehensive and compassionate patient care.<br />We work with a number of companies that provide services in the home.
            </p>
            <p className='servicesPointsTitle'>These services include but are not limited to:</p>
            <div id='servicesPointsContainer'>
              <p className='servicesPointText'>• X-ray</p>
              <p className='servicesPointText'>• Ultrasound</p>
              <p className='servicesPointText'>• Sleep Studies</p>
              <p className='servicesPointText'>• EEG/EKG/Echocardiogram</p>
              <p className='servicesPointText'>• Eye Exams</p>
              <p className='servicesPointText'>• Bone Density Screening</p>
              <p className='servicesPointText'>• Bloodwork</p>
              <p className='servicesPointText'>• Podiatry</p>
              <p className='servicesPointText'>• Talk Therapy</p>
              <p className='servicesPointText'>• Home Health, Hospice, and much more.</p>
            </div>
            <br />
            <p className='servicesPointsTitle'><b>Please contact our office to schedule an appointment!</b></p>
          </div>
          <div id='servicesHalfWhiteSpace' />
          <h2 className='servicesTitle'>
            IN HOME ASSESSMENT SERVICES
          </h2>
          <Divider />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>We are currently scheduling 2022 In-Home Assessments for Molina Healthcare, SelectHealth, Health Choice Generations, and University of Utah Health.<br /><br />Please contact <b>Daisy, Jacqueline, Mary, Evelyn, Sienna, Sharlee, Bailey</b> to schedule your free in-home exam!</p>
            <p className='servicesSubText'>Since 2012 House Call Doctors has worked with numerous health plans to provide convenient, annual wellness check-ups in the home.</p>
            <p className='servicesSubText'>These visits are requested by your insurance company to aid them in updating member information and ensuring all benefits are being utilized.</p>
            <p className='servicesSubText'>During these visits our skilled and professional provider will review your diagnosis history and medications, recommend preventive screenings, take basic vital signs, and perform some point-of-care testing.</p>
            <p className='servicesSubText'>There is <b>no fee</b> for these visits.</p>
            <p className='servicesSubText'>Your eligibility is determined by your health plan.</p>
            <p className='servicesSubText'>If you feel you are eligible for an in-home wellness check-up please contact your health plan.</p>
            <p className='servicesSubText'>For any questions regarding in-home assessments, please contact Emma Eakland at (801) 485-5055 or <Email href="mailto:Emma@housecalldoctorsut.com">Emma@housecalldoctorsut.com</Email>.</p>
          </div>
        </div>
        <div id='servicesWhiteSpace' />
      </>
    )
  }
};


export default OurServices;
