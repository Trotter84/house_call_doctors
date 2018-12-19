import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image, Divider } from 'semantic-ui-react';
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
              <Image src={Mark} />
              <h3>MARK J. CACCIAMANI, M.D.</h3>
              <p>Dr. Mark Cacciamani has always had an interest in serving the underserved. He took a yearoff before attending medical school to volunteer in Southern California, aiding the Spanish-speaking community that didn’t have access to medical care.</p>
            </Profile>
            <Profile>
              <Image src={Perrine} />
              <h3>PERRINE ANDERSON, GNP</h3>
              <p>My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community who have difficulty accessing medical and psychiatric care.</p>
            </Profile>
            <Profile>
              <Image src={Sandra} />
              <h3>SANDRA JENSE, APRN</h3>
              <p>As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to spend their time in a hospital or a clinic, waiting for medical care, and house calls are a way to support people’s medical needs while giving them more time to do what matters most to them.</p>
            </Profile>
            <Profile>
              <Image src={Rita} />
              <h3>RITA RUTLAND, APRN</h3>
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
