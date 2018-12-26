import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MarkWithPatient from '../../images/markwithpatient1.jpg';


const MainContainer = Styled.div`
  width: 1175px;
  margin: auto;
`

const Title = Styled.h2`
  font-weight: normal;
  font-size: 15px;
  padding-top: 65px;
`

const SubTitle = Styled.h2`
  font-weight: normal;
  font-size: 15px;
`

const SubText = Styled.p`
  color: #515151;
  font-weight: normal;
  padding-left: 20px;
  font-size: 15px;
`

const Address = Styled.p`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WhiteSpace = Styled.div`
  height: 80px;
`


const styles = {
  policy:{
    paddingLeft: '20px',
  },

  link:{
    color: 'black',
  },
}


class OurPrivacyPolicy extends Component {

  componentDidMount() {
    document.title='Our Privacy Policy'
  }

  render() {
    return(
      <>
        <div>
          <Image src={MarkWithPatient} />
        </div>
        <MainContainer>
          <Title>
            <h2>Privacy Promise:</h2>
          </Title>
          <SubText>
            <p>House Call Doctors understands that your medical and health information is personal. Protecting your health information is important.<br />We follow strict federal and state laws that require us to maintain the confidentiality of your health information.</p>
          </SubText>
          <SubTitle>
            <h2>How We Use Your Health Information:</h2>
          </SubTitle>
          <SubText>
            <p>When you receive care from House Call Doctors, we may use your health information for treating you, billing for services, and conducting our normal business known as health care operations.</p>
            <p>Examples of how we use your information include:</p>
              <p style={styles.policy}><b>Treatment-</b> We keep records of the care and services provided to you.  Health care providers use these records to deliver quality care to meet your needs.  For example, your doctor may share your health information with a specialist who will assist in your treatment.  Some health records, including confidential communications with a mental health professional and substance abuse records, may have additional restrictions for use and disclosure under state and federal law.</p>
              <p style={styles.policy}><b>Payment-</b> We may use and disclose your information in order to bill and collect payment for the services and items you may receive from us.  Your information may be used to obtain payment from you, your insurance company, or another third party.  We may also contact your insurance company to verify coverage for your care or to notify them of upcoming services that may need prior notice or approval.  For example, we may disclose health information about the services provided in order to obtain payment from your insurance company or Medicare.</p>
              <p style={styles.policy}><b>Health Care Operations-</b> We use health information to improve the quality of care, train staff and students, and provide customer service, manage costs, conduct required business duties, and make plans to better serve our patients.</p>
          </SubText>
          <SubTitle>
            <h2>Sharing Your Health Information:</h2>
          </SubTitle>
          <SubText>
            <p>There are limited situations when we are permitted or required to disclose health information without your signature as authorization.<br />These situations are:</p>
              <p style={styles.policy}>For public health purposes such as reporting communicable diseases, work-related illnesses, or other diseases and injuries permitted by law; reporting births and deaths, and reporting reactions to drugs and problems with medical devices.</p>
              <p style={styles.policy}>To protect victims of abuse, neglect, or domestic violence.</p>
              <p style={styles.policy}>For health oversight activities such as investigations, audits, and inspections.</p>
              <p style={styles.policy}>For lawsuits and similar proceedings.</p>
              <p style={styles.policy}>When required by law.</p>
              <p style={styles.policy}>When requested by law enforcement as required by law or court order.</p>
              <p style={styles.policy}>To coroners, medical examiners, and funeral directors.</p>
              <p style={styles.policy}>For organ and tissue donations.</p>
              <p style={styles.policy}>For research approved by our review process under strict federal guidelines.</p>
              <p style={styles.policy}>To reduce or prevent a serious threat to public health and safety.</p>
              <p style={styles.policy}>For worker’s compensation or other similar programs if you are injured at work.</p>
              <p style={styles.policy}>To correctional institutions or law enforcement officials if you are an inmate or under the custody of a law enforcement official.</p>
              <p style={styles.policy}>For specialized government functions such as intelligence and national security.</p>
            <p>All other uses and disclosures, not described in this notice, require your signed authorization.  You may revoke your authorization at any time with a written statement.</p>
          </SubText>
          <SubTitle>
            <h2>Our Privacy Responsibilities:</h2>
          </SubTitle>
          <SubText>
              <p style={styles.policy}>Maintain the privacy of your health information.</p>
              <p style={styles.policy}>Provide this notice that describes the ways we may use and share your health information.</p>
              <p style={styles.policy}>Follow the terms of the notice currently in effect.</p>
            <p>We reserve the right to make changes to this notice at any time and apply the new privacy practices to all information we maintain.<br />Current notices will be posted at House Call Doctors’ main office.  You may also request a copy of this notice from our staff.</p>
          </SubText>
          <SubTitle>
            <h2>Your Individual Rights:</h2>
          </SubTitle>
          <SubText>
              <p style={styles.policy}>Request special restrictions on how we use and share your health information.  We will consider all requests for special restrictions carefully but are not required to agree to any restriction.</p>
              <p style={styles.policy}>Request that we use a specific telephone number or address to communicate with you.  You may request this during registration or at any time.</p>
              <p style={styles.policy}>Inspect and receive a copy of your health information, including medical and billing records.  Fees may apply.  Under limited circumstances, we may deny you access to a portion of your health information and you may request a review of the denial.</p>
              <p style={styles.policy}>Request an amendment to your health information.</p>
              <p style={styles.policy}>Request an accounting of certain disclosures we make of your health information.  The list does not include disclosures made for treatment, payment, and health care operations and some disclosures required by law. Your request must state the period of time requested for the accounting.  An accounting goes back only six years and does not cover disclosures made prior to August 13, 2004.  The first accounting is free but a fee will apply if more than one request is made in a 12 month period.</p>
              <p style={styles.policy}>Request a paper copy of this notice even if you agree to receive it electronically.</p>
          </SubText>
          <SubTitle>
            <h2>Other Services We Provide:</h2>
          </SubTitle>
          <SubText>
            <p>We may also use your health information to:</p>
              <p style={styles.policy}>Recommend treatment alternatives.</p>
              <p style={styles.policy}>Tell you about health services and products that may benefit you.</p>
              <p style={styles.policy}>Share information with family or friends directly involved in your care of in paying for your care.</p>
              <p style={styles.policy}>Share infomration with third parties who assist us with treatment, payment, and health care operations.  Our business associates must follow our privacy practices.</p>
              <p style={styles.policy}>Remind you of an appointment.</p>
          </SubText>
          <SubTitle>
            <h2>Our Organization:</h2>
          </SubTitle>
          <SubText>
            <p>This notice describes the privacy practices of House Call Doctors.  Included are providers, employees, students, trainees, and volunteers.</p>
          </SubText>
          <SubTitle>
            <h2><Link to={'/contact-us'} style={styles.link}>Contact Us:</Link></h2>
          </SubTitle>
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
            <p>We will investigate all complaints and will not retaliate against you for filing a complaint.   You may also file a written complaint with the Office of Civil Rights of the U.S. Department of Health and Human Services.</p>
            <p>For information on <b>HIPAA</b> laws <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html#1901" style={styles.link}><b>click here</b></a></p>
          </SubText>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }

};

export default OurPrivacyPolicy;
