import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
// import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import HCDpageDivider2 from '../../images/HCD_group_divider.jpg';
import HIPAA from '../../images/HIPAA-Seal-of-Compliance.webp';


const ContactUs = Styled(Link)`
  color: black;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

const Hipaa = Styled.a`
  color: black;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`


class Ourpolicy extends Component {

  componentDidMount() {
    document.title = 'Our Privacy Policy'
  }

  render() {
    return (
      <>
        <h1 className='pageTitleReader' aria-label="Our Privacy Policy page">Our Privacy Policy</h1>
        <Image id='image-divider' src={HCDpageDivider2} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='mainContainerPrivacy'>
          <h2 className='top'>Privacy Promise:</h2>
          <p>House Call Doctors understands that your medical and health information is personal. Protecting your health information is important.<br />We follow strict federal and state laws that require us to maintain the confidentiality of your health information.</p>
          <h2>How We Use Your Health Information:</h2>
          <p>When you receive care from House Call Doctors, we may use your health information for treating you, billing for services, and conducting our normal business known as health care operations.</p>
          <p>Examples of how we use your information include:</p>
          <p className='policy'><b>Treatment-</b> We keep records of the care and services provided to you.  Health care providers use these records to deliver quality care to meet your needs.  For example, your doctor may share your health information with a specialist who will assist in your treatment.  Some health records, including confidential communications with a mental health professional and substance abuse records, may have additional restrictions for use and disclosure under state and federal law.</p>
          <p className='policy'><b>Payment-</b> We may use and disclose your information in order to bill and collect payment for the services and items you may receive from us.  Your information may be used to obtain payment from you, your insurance company, or another third party.  We may also contact your insurance company to verify coverage for your care or to notify them of upcoming services that may need prior notice or approval.  For example, we may disclose health information about the services provided in order to obtain payment from your insurance company or Medicare.</p>
          <p className='policy'><b>Health Care Operations-</b> We use health information to improve the quality of care, train staff and students, and provide customer service, manage costs, conduct required business duties, and make plans to better serve our patients.</p>
          <h2>Sharing Your Health Information:</h2>
          <p>There are limited situations when we are permitted or required to disclose health information without your signature as authorization.<br />These situations are:</p>
          <p className='policy'>For public health purposes such as reporting communicable diseases, work-related illnesses, or other diseases and injuries permitted by law; reporting births and deaths, and reporting reactions to drugs and problems with medical devices.</p>
          <p className='policy'>To protect victims of abuse, neglect, or domestic violence.</p>
          <p className='policy'>For health oversight activities such as investigations, audits, and inspections.</p>
          <p className='policy'>For lawsuits and similar proceedings.</p>
          <p className='policy'>When required by law.</p>
          <p className='policy'>When requested by law enforcement as required by law or court order.</p>
          <p className='policy'>To coroners, medical examiners, and funeral directors.</p>
          <p className='policy'>For organ and tissue donations.</p>
          <p className='policy'>For research approved by our review process under strict federal guidelines.</p>
          <p className='policy'>To reduce or prevent a serious threat to public health and safety.</p>
          <p className='policy'>For worker’s compensation or other similar programs if you are injured at work.</p>
          <p className='policy'>To correctional institutions or law enforcement officials if you are an inmate or under the custody of a law enforcement official.</p>
          <p className='policy'>For specialized government functions such as intelligence and national security.</p>
          <p>All other uses and disclosures, not described in this notice, require your signed authorization.  You may revoke your authorization at any time with a written statement.</p>
          <h2>Our Privacy Responsibilities:</h2>
          <p className='policy'>Maintain the privacy of your health information.</p>
          <p className='policy'>Provide this notice that describes the ways we may use and share your health information.</p>
          <p className='policy'>Follow the terms of the notice currently in effect.</p>
          <p>We reserve the right to make changes to this notice at any time and apply the new privacy practices to all information we maintain.<br />Current notices will be posted at House Call Doctors’ main office.  You may also request a copy of this notice from our staff.</p>
          <h2>Your Individual Rights:</h2>
          <p className='policy'>Request special restrictions on how we use and share your health information.  We will consider all requests for special restrictions carefully but are not required to agree to any restriction.</p>
          <p className='policy'>Request that we use a specific telephone number or address to communicate with you.  You may request this during registration or at any time.</p>
          <p className='policy'>Inspect and receive a copy of your health information, including medical and billing records.  Fees may apply.  Under limited circumstances, we may deny you access to a portion of your health information and you may request a review of the denial.</p>
          <p className='policy'>Request an amendment to your health information.</p>
          <p className='policy'>Request an accounting of certain disclosures we make of your health information.  The list does not include disclosures made for treatment, payment, and health care operations and some disclosures required by law. Your request must state the period of time requested for the accounting.  An accounting goes back only six years and does not cover disclosures made prior to August 13, 2004.  The first accounting is free but a fee will apply if more than one request is made in a 12 month period.</p>
          <p className='policy'>Request a paper copy of this notice even if you agree to receive it electronically.</p>
          <h2>Other Services We Provide:</h2>
          <p>We may also use your health information to:</p>
          <p className='policy'>Recommend treatment alternatives.</p>
          <p className='policy'>Tell you about health services and products that may benefit you.</p>
          <p className='policy'>Share information with family or friends directly involved in your care of in paying for your care.</p>
          <p className='policy'>Share infomration with third parties who assist us with treatment, payment, and health care operations.  Our business associates must follow our privacy practices.</p>
          <p className='policy'>Remind you of an appointment.</p>
          <h2>Our Organization:</h2>
          <p>This notice describes the privacy practices of House Call Doctors. Included are providers, employees, students, trainees, and volunteers.</p>
          <h2><ContactUs to={'/contact-us'}>Contact Us:</ContactUs></h2>
          <p>If you are concerned that your privacy rights may have been violated, or disagree with a decision that we made about access to your health information, you may contact us at:</p>
          <p className='address'>House Call Doctors</p>
          <p className='address'>466 E 500 S UNIT 200</p>
          <p className='address'>Salt Lake City, UT 84111</p>
          <p className='address'>(801) 485-5055</p>
          <p>We will investigate all complaints and will not retaliate against you for filing a complaint. You may also file a written complaint with the Office of Civil Rights of the U.S. Department of Health and Human Services.</p>
          <p>For information on <b>HIPAA</b> laws <Hipaa href={'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html'} target='_blank'><b>click here</b></Hipaa></p>
          <a className='address' href="https://compliancy-group.com/hipaa-compliance-verification" target="_blank" rel="noopener noreferrer"><img class="aligncenter wp-image-13813" src={HIPAA} alt="HIPAA Seal of Compliance Verication" width="246" height="130" /></a>
        </div>
        <div id='privacyWhiteSpace' />
      </>
    )
  }

};

export default Ourpolicy;
