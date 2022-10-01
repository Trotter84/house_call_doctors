import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';


const ContactUs = Styled(Link)`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

const Hipaa = Styled.a`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`


class OurPrivacyPolicy extends Component {

  componentDidMount() {
    document.title='Our Privacy Policy'
  }

  render() {
    return(
      <>
        <h1 className='pageTitleReader' aria-label="Our Privacy Policy page">Our Privacy Policy</h1>
        <div id='imageDividerContainer'>
          <Image id='imageDivider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        </div>
        <div id='privacyMainContainer'>
          <h2 id='privacyTitleTop'>
            Privacy Promise:
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>House Call Doctors understands that your medical and health information is personal. Protecting your health information is important.<br />We follow strict federal and state laws that require us to maintain the confidentiality of your health information.</p>
          </div>
          <h2 className='privacyTitle'>
            How We Use Your Health Information:
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>When you receive care from House Call Doctors, we may use your health information for treating you, billing for services, and conducting our normal business known as health care operations.</p>
            <p className='privacySubText'>Examples of how we use your information include:</p>
              <p className='privacyPolicy'><b>Treatment-</b> We keep records of the care and services provided to you.  Health care providers use these records to deliver quality care to meet your needs.  For example, your doctor may share your health information with a specialist who will assist in your treatment.  Some health records, including confidential communications with a mental health professional and substance abuse records, may have additional restrictions for use and disclosure under state and federal law.</p>
              <p className='privacyPolicy'><b>Payment-</b> We may use and disclose your information in order to bill and collect payment for the services and items you may receive from us.  Your information may be used to obtain payment from you, your insurance company, or another third party.  We may also contact your insurance company to verify coverage for your care or to notify them of upcoming services that may need prior notice or approval.  For example, we may disclose health information about the services provided in order to obtain payment from your insurance company or Medicare.</p>
              <p className='privacyPolicy'><b>Health Care Operations-</b> We use health information to improve the quality of care, train staff and students, and provide customer service, manage costs, conduct required business duties, and make plans to better serve our patients.</p>
          </div>
          <h2 className='privacyTitle'>
            Sharing Your Health Information:
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>There are limited situations when we are permitted or required to disclose health information without your signature as authorization.<br />These situations are:</p>
              <p className='privacyPolicy'>For public health purposes such as reporting communicable diseases, work-related illnesses, or other diseases and injuries permitted by law; reporting births and deaths, and reporting reactions to drugs and problems with medical devices.</p>
              <p className='privacyPolicy'>To protect victims of abuse, neglect, or domestic violence.</p>
              <p className='privacyPolicy'>For health oversight activities such as investigations, audits, and inspections.</p>
              <p className='privacyPolicy'>For lawsuits and similar proceedings.</p>
              <p className='privacyPolicy'>When required by law.</p>
              <p className='privacyPolicy'>When requested by law enforcement as required by law or court order.</p>
              <p className='privacyPolicy'>To coroners, medical examiners, and funeral directors.</p>
              <p className='privacyPolicy'>For organ and tissue donations.</p>
              <p className='privacyPolicy'>For research approved by our review process under strict federal guidelines.</p>
              <p className='privacyPolicy'>To reduce or prevent a serious threat to public health and safety.</p>
              <p className='privacyPolicy'>For worker’s compensation or other similar programs if you are injured at work.</p>
              <p className='privacyPolicy'>To correctional institutions or law enforcement officials if you are an inmate or under the custody of a law enforcement official.</p>
              <p className='privacyPolicy'>For specialized government functions such as intelligence and national security.</p>
            <p className='privacySubText'>All other uses and disclosures, not described in this notice, require your signed authorization.  You may revoke your authorization at any time with a written statement.</p>
          </div>
          <h2 className='privacyTitle'>
            Our Privacy Responsibilities:
          </h2>
          <div className='privacySubTextContainer'>
              <p className='privacyPolicy'>Maintain the privacy of your health information.</p>
              <p className='privacyPolicy'>Provide this notice that describes the ways we may use and share your health information.</p>
              <p className='privacyPolicy'>Follow the terms of the notice currently in effect.</p>
            <p className='privacySubText'>We reserve the right to make changes to this notice at any time and apply the new privacy practices to all information we maintain.<br />Current notices will be posted at House Call Doctors’ main office.  You may also request a copy of this notice from our staff.</p>
          </div>
          <h2 className='privacyTitle'>
            Your Individual Rights:
          </h2>
          <div className='privacySubTextContainer'>
              <p className='privacyPolicy'>Request special restrictions on how we use and share your health information.  We will consider all requests for special restrictions carefully but are not required to agree to any restriction.</p>
              <p className='privacyPolicy'>Request that we use a specific telephone number or address to communicate with you.  You may request this during registration or at any time.</p>
              <p className='privacyPolicy'>Inspect and receive a copy of your health information, including medical and billing records.  Fees may apply.  Under limited circumstances, we may deny you access to a portion of your health information and you may request a review of the denial.</p>
              <p className='privacyPolicy'>Request an amendment to your health information.</p>
              <p className='privacyPolicy'>Request an accounting of certain disclosures we make of your health information.  The list does not include disclosures made for treatment, payment, and health care operations and some disclosures required by law. Your request must state the period of time requested for the accounting.  An accounting goes back only six years and does not cover disclosures made prior to August 13, 2004.  The first accounting is free but a fee will apply if more than one request is made in a 12 month period.</p>
              <p className='privacyPolicy'>Request a paper copy of this notice even if you agree to receive it electronically.</p>
          </div>
          <h2 className='privacyTitle'>
            Other Services We Provide:
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>We may also use your health information to:</p>
              <p className='privacyPolicy'>Recommend treatment alternatives.</p>
              <p className='privacyPolicy'>Tell you about health services and products that may benefit you.</p>
              <p className='privacyPolicy'>Share information with family or friends directly involved in your care of in paying for your care.</p>
              <p className='privacyPolicy'>Share infomration with third parties who assist us with treatment, payment, and health care operations.  Our business associates must follow our privacy practices.</p>
              <p className='privacyPolicy'>Remind you of an appointment.</p>
          </div>
          <h2 className='privacyTitle'>
            Our Organization:
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>This notice describes the privacy practices of House Call Doctors. Included are providers, employees, students, trainees, and volunteers.</p>
          </div>
          <h2 className='privacyTitle'>
            <ContactUs to={'/contact-us'} className='privacyLink'>Contact Us:</ContactUs>
          </h2>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>If you are concerned that your privacy rights may have been violated, or disagree with a decision that we made about access to your health information, you may contact us at:</p>
          </div>
          <div id='privacyAddressContainer'>
            <p className='privacyAddress'>House Call Doctors</p>
            <p className='privacyAddress'>522 E. 100 S. </p>
            <p className='privacyAddress'>Salt Lake City, UT 84102</p>
            <p className='privacyAddress'>(801) 485-5055</p>
          </div>
          <div className='privacySubTextContainer'>
            <p className='privacySubText'>We will investigate all complaints and will not retaliate against you for filing a complaint. You may also file a written complaint with the Office of Civil Rights of the U.S. Department of Health and Human Services.</p>
            <p className='privacySubText'>For information on <b>HIPAA</b> laws <Hipaa className='privacyLink' href={'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html'} target='_blank'><b>click here</b></Hipaa></p>
            <a className='privacyAddress' href="https://compliancy-group.com/hipaa-compliance-verification" target="_blank" rel="noopener"><img class="aligncenter wp-image-13813" src="https://1qy13e1kz4mu2twyf741jfes-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/HIPAA-Website-Verified-Seal.png" alt="HIPAA Seal of Compliance Verication" width="246" height="130" /></a>
          </div>
        </div>
        <div id='privacyWhiteSpace' />
      </>
    )
  }

};

export default OurPrivacyPolicy;
