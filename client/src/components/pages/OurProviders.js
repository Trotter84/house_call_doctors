import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider
} from 'semantic-ui-react';
import {
  Link,
  Route,
  NavLink
} from 'react-router-dom';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import Mark from '../../images/Mark.jpg';
import Perrine from '../../images/Perrine.jpg';
import Sandra from '../../images/Sandra.jpg';
import Rita from '../../images/Rita.jpg';
import DownArrow from '../../images/downArrow.png';
import MarkInfo from '../infoPages/MarkInfo';
import PerrineInfo from '../infoPages/PerrineInfo';
import RitaInfo from '../infoPages/RitaInfo';
import SandraInfo from '../infoPages/SandraInfo';



const MainContainer = Styled.div`
  max-width: 1250px;
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

const Pic = Styled.a`
  &.active {
    transform: scale(1.02);
  }
`

const Name = Styled.h3`
  color: #AF3120;
  padding-bottom: 10px;
`

const DropArrow = Styled.div`

`

const ArrowSpace = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Arrow = Styled.img`
  color: #9e9e9e;
  max-width: 50px;
  max-height: 10px;
`

const InfoSection = Styled.div`
  display: none;
  :target {
    display: block;
  }
`

const TopWhiteSpace = Styled.div`
  height: 55px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {
  line:{
    margin: '6px 0 6px 0',
  }
}


class OurProviders extends Component {

  componentDidMount() {
    document.title='Our Providers'
  }

  render() {

    const BaseURL = this.props.match.url

    return(

      <>
        <div>
          <Image src={HCDpageDivider} />
        </div>
        <TopWhiteSpace />
        <MainContainer>
          <Title>
            OUR PROVIDERS
          </Title>
          <Divider />
          <FullSection>
            <Profile>
              <Pic href={`#mark`}><Image src={Mark} alt="Profile Picture of Mark" /></Pic>
              <Name>MARK J. CACCIAMANI, M.D.</Name>
              <p> &nbsp; &nbsp; &nbsp; Dr. Mark Cacciamani has always had an interest in serving the underserved. He took a yearoff before attending medical school to volunteer in Southern California, aiding the Spanish-speaking community that didn’t have access to medical care.</p>

              <Link to={`${BaseURL}/mark`}>
                <DropArrow>
                  <Divider style={styles.line} />
                    <ArrowSpace><Arrow src={DownArrow}></Arrow></ArrowSpace>
                  <Divider style={styles.line} />
                </DropArrow>
              </Link>

            </Profile>
            <Profile>
              <Pic to={`${BaseURL}/perrine`}><Image src={Perrine} alt="Profile Picture of Perrine" /></Pic>
              <Name>PERRINE ANDERSON, GNP</Name>
              <p> &nbsp; &nbsp; &nbsp; My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community who have difficulty accessing medical and psychiatric care.</p>

              <Link to={`${BaseURL}/perrine`}>
                <DropArrow>
                  <Divider style={styles.line} />
                    <ArrowSpace><Arrow src={DownArrow}></Arrow></ArrowSpace>
                  <Divider style={styles.line} />
                </DropArrow>
              </Link>

            </Profile>
            <Profile>
              <Pic to={`${BaseURL}/sandra`}><Image src={Sandra} alt="Profile Picture of Sandra" /></Pic>
              <Name>SANDRA JENSE, APRN</Name>
              <p> &nbsp; &nbsp; &nbsp; As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to spend their time in a hospital or a clinic, waiting for medical care, and house calls are a way to support people’s medical needs while giving them more time to do what matters most to them.</p>

              <Link to={`${BaseURL}/sandra`}>
                <DropArrow>
                  <Divider style={styles.line} />
                    <ArrowSpace><Arrow src={DownArrow}></Arrow></ArrowSpace>
                  <Divider style={styles.line} />
                </DropArrow>
              </Link>

            </Profile>
            <Profile>
              <Pic to={`${BaseURL}/rita`}><Image src={Rita} alt="Profile Picture of Rita" /></Pic>
              <Name>RITA RUTLAND, APRN</Name>
              <p> &nbsp; &nbsp; &nbsp; </p>

              <Link to={`${BaseURL}/rita`}>
                <DropArrow>
                  <Divider style={styles.line} />
                    <ArrowSpace><Arrow src={DownArrow}></Arrow></ArrowSpace>
                  <Divider style={styles.line} />
                </DropArrow>
              </Link>

            </Profile>
          </FullSection>

          <InfoSection id='mark' children={<MarkInfo />} />
          <Route path={`${BaseURL}/perrine`} component={PerrineInfo} />
          <Route path={`${BaseURL}/rita`} component={RitaInfo} />
          <Route path={`${BaseURL}/sandra`} component={SandraInfo} />

        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};


export default OurProviders;
