import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MarkWithPatient from '../images/markwithpatient1.jpg';
import Mark from '../images/Mark.jpg';
import Perrine from '../images/Perrine.jpg';
import Sandra from '../images/Sandra.jpg';
import Rita from '../images/Rita.jpg';


const MainContainer = Styled.div`
  width: 1175px;
  margin: auto;
`

const Title = Styled.h2`
  font-weight: bold;
  padding-top: 5px;
`

const FullSection = Styled.div`
  display: flex;
  flex-direction: row;
`

const Profile = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px 0 5px;
`

const Pic = Styled.div`
  :hover{
    transform: scale(1.02);
  }
`

const Name = Styled.h3`
  color: #AF3120;
  :hover{
    color: black;
  }
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {

}


class OurProviders extends Component {

  componentDidMount() {
    document.title='Our Providers'
  }

  render() {
    return(
      <>
        <div>
          <Image src={MarkWithPatient} />
        </div>
        <WhiteSpace>
        </WhiteSpace>
        <MainContainer>
          <Title>
            <h2>OUR DOCTORS</h2>
          </Title>
          <Divider />
          <FullSection>
            <Profile>
              <Link to={'marks-info'}><Pic><Image src={Mark} /></Pic>
              <Name>MARK J. CACCIAMANI, M.D.</Name></Link>
              <p>Dr. Mark Cacciamani has always had an interest in serving the underserved. He took a yearoff before attending medical school to volunteer in Southern California, aiding the Spanish-speaking community that didn’t have access to medical care.</p>
            </Profile>
            <Profile>
              <Link to={'perrines-info'}><Pic><Image src={Perrine} /></Pic>
              <Name>PERRINE ANDERSON, GNP</Name></Link>
              <p>My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community who have difficulty accessing medical and psychiatric care.</p>
            </Profile>
            <Profile>
              <Link to={'sandras-info'}><Pic><Image src={Sandra} /></Pic>
              <Name>SANDRA JENSE, APRN</Name></Link>
              <p>As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to spend their time in a hospital or a clinic, waiting for medical care, and house calls are a way to support people’s medical needs while giving them more time to do what matters most to them.</p>
            </Profile>
            <Profile>
              <Link to={'ritas-info'}><Pic><Image src={Rita} /></Pic>
              <Name>RITA RUTLAND, APRN</Name></Link>
              <p></p>
            </Profile>
          </FullSection>
        </MainContainer>
        <WhiteSpace>
        </WhiteSpace>
      </>
    )
  }
};


export default OurProviders;
