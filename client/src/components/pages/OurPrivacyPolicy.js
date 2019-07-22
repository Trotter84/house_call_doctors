import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';


const MainContainer = Styled.div`
  max-width: 1250px;
  margin: auto;
`

const Title = Styled.h2`
  font-weight: bold;
  padding-top: 65px;
`


const SubText = Styled.div`
  padding-left: 20px;

  p{
    color: #494949;
    font-weight: normal;
    font-size: 15px;
  }
`

const Policy = Styled.p`
  padding-left: 20px;
`

const Address = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px 0;

  p{
    font-weight: bold;
  }
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const Hipaa = Styled.a`
  color: black;
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
        <div>
          <Image src={HCDpageDivider} />
        </div>
        <MainContainer>
          <Title>
            Privacy Promise:
          </Title>
          <SubText>
            <p>House Call Doctors understands that your medical and health information is personal. Protecting your health information is important.<br />We follow strict federal and state laws that require us to maintain the confidentiality of your health information.</p>
          </SubText>
          <h2>
            How We Use Your Health Information:
          </h2>
          <SubText>
            <p>When you receive care from House Call Doctors, we may use your health information for treating you, billing for services, and conducting our normal business known as health care operations.</p>
            <p>Examples of how we use your information include:</p>
              <Policy><b>Treatment-</b> We keep records of the care and services provided to you.  Health care providers use these records to deliver quality care to meet your needs.  For example, your doctor may share your health information with a specialist who will assist in your treatment.  Some health records, including confidential communications with a mental health professional and substance abuse records, may have additional restrictions for use and disclosure under state and federal law.</Policy>
              <Policy><b>Payment-</b> We may use and disclose your information in order to bill and collect payment for the services and items you may receive from us.  Your information may be used to obtain payment from you, your insurance company, or another third party.  We may also contact your insurance company to verify coverage for your care or to notify them of upcoming services that may need prior notice or approval.  For example, we may disclose health information about the services provided in order to obtain payment from your insurance company or Medicare.</Policy>
              <Policy><b>Health Care Operations-</b> We use health information to improve the quality of care, train staff and students, and provide customer service, manage costs, conduct required business duties, and make plans to better serve our patients.</Policy>
          </SubText>
          <h2>
            Sharing Your Health Information:
          </h2>
          <SubText>
            <p>There are limited situations when we are permitted or required to disclose health information without your signature as authorization.<br />These situations are:</p>
              <Policy>For public health purposes such as reporting communicable diseases, work-related illnesses, or other diseases and injuries permitted by law; reporting births and deaths, and reporting reactions to drugs and problems with medical devices.</Policy>
              <Policy>To protect victims of abuse, neglect, or domestic violence.</Policy>
              <Policy>For health oversight activities such as investigations, audits, and inspections.</Policy>
              <Policy>For lawsuits and similar proceedings.</Policy>
              <Policy>When required by law.</Policy>
              <Policy>When requested by law enforcement as required by law or court order.</Policy>
              <Policy>To coroners, medical examiners, and funeral directors.</Policy>
              <Policy>For organ and tissue donations.</Policy>
              <Policy>For research approved by our review process under strict federal guidelines.</Policy>
              <Policy>To reduce or prevent a serious threat to public health and safety.</Policy>
              <Policy>For worker’s compensation or other similar programs if you are injured at work.</Policy>
              <Policy>To correctional institutions or law enforcement officials if you are an inmate or under the custody of a law enforcement official.</Policy>
              <Policy>For specialized government functions such as intelligence and national security.</Policy>
            <p>All other uses and disclosures, not described in this notice, require your signed authorization.  You may revoke your authorization at any time with a written statement.</p>
          </SubText>
          <h2>
            Our Privacy Responsibilities:
          </h2>
          <SubText>
              <Policy>Maintain the privacy of your health information.</Policy>
              <Policy>Provide this notice that describes the ways we may use and share your health information.</Policy>
              <Policy>Follow the terms of the notice currently in effect.</Policy>
            <p>We reserve the right to make changes to this notice at any time and apply the new privacy practices to all information we maintain.<br />Current notices will be posted at House Call Doctors’ main office.  You may also request a copy of this notice from our staff.</p>
          </SubText>
          <h2>
            Your Individual Rights:
          </h2>
          <SubText>
              <Policy>Request special restrictions on how we use and share your health information.  We will consider all requests for special restrictions carefully but are not required to agree to any restriction.</Policy>
              <Policy>Request that we use a specific telephone number or address to communicate with you.  You may request this during registration or at any time.</Policy>
              <Policy>Inspect and receive a copy of your health information, including medical and billing records.  Fees may apply.  Under limited circumstances, we may deny you access to a portion of your health information and you may request a review of the denial.</Policy>
              <Policy>Request an amendment to your health information.</Policy>
              <Policy>Request an accounting of certain disclosures we make of your health information.  The list does not include disclosures made for treatment, payment, and health care operations and some disclosures required by law. Your request must state the period of time requested for the accounting.  An accounting goes back only six years and does not cover disclosures made prior to August 13, 2004.  The first accounting is free but a fee will apply if more than one request is made in a 12 month period.</Policy>
              <Policy>Request a paper copy of this notice even if you agree to receive it electronically.</Policy>
          </SubText>
          <h2>
            Other Services We Provide:
          </h2>
          <SubText>
            <p>We may also use your health information to:</p>
              <Policy>Recommend treatment alternatives.</Policy>
              <Policy>Tell you about health services and products that may benefit you.</Policy>
              <Policy>Share information with family or friends directly involved in your care of in paying for your care.</Policy>
              <Policy>Share infomration with third parties who assist us with treatment, payment, and health care operations.  Our business associates must follow our privacy practices.</Policy>
              <Policy>Remind you of an appointment.</Policy>
          </SubText>
          <h2>
            Our Organization:
          </h2>
          <SubText>
            <p>This notice describes the privacy practices of House Call Doctors. Included are providers, employees, students, trainees, and volunteers.</p>
          </SubText>
          <h2>
            <Hipaa to={'/contact-us'}>Contact Us:</Hipaa>
          </h2>
          <SubText>
            <p>If you are concerned that your privacy rights may have been violated, or disagree with a decision that we made about access to your health information, you may contact us at:</p>
          </SubText>

          <Address>
            <p>House Call Doctors</p>
            <p>522 E. 100 S. </p>
            <p>Salt Lake City, UT 84102</p>
            <p>(801) 485-5055</p>
          </Address>

          <SubText>
            <p>We will investigate all complaints and will not retaliate against you for filing a complaint. You may also file a written complaint with the Office of Civil Rights of the U.S. Department of Health and Human Services.</p>
            <p>For information on <b>HIPAA</b> laws <Hipaa href={'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html'}><b>click here</b></Hipaa></p>
          </SubText>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }

};

export default OurPrivacyPolicy;
