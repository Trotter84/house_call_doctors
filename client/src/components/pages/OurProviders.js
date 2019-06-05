import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Modal,
  Divider
} from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import profiles from '../ProfileInfo';
import ihapProviders from '../IhapProviders';



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
  max-height: 600px;
`

const Name = Styled.h3`
  color: #AF3120;
  padding-bottom: 10px;
`

const InfoBtn = Styled.a`
  font-size: 15px;
  color: black;
  padding-left: 10px;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
    cursor: pointer;
  }
`

const Pic = Styled.div`
  max-width: 600px;
`

const Edu = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 260px;
`

const Bio = Styled.p`
  margin-bottom: 7px;
`

const Interests = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
`

const Int = Styled.p`
  margin-bottom: 7px;
`

const Info = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Names = Styled.div`
  display: block;
`

const Ihap = Styled.div`
  padding: 10px 0 0 10px;
  height: 50px;
  width: 220px;
  border: solid .5px;
    height: 100%;

    ${Names} {
      display: block;
    }
  }
`

const State = Styled.h2`
  font-size: 19px;
`

const IhapSection = Styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  column-count: 3;
`

const BottomSection = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const TopWhiteSpace = Styled.div`
  height: 55px;
`

const HalfWhiteSpace = Styled.div`
  height: 40px;
`

const WhiteSpace = Styled.div`
  height: 80px;
`

const styles = {
  line:{
    margin: '6px 0 6px 0',
  },

  stateLine:{
    maxWidth: '276px',
  },

  names:{

  },

  divider:{
    width: '527px',
  },
}


class OurProviders extends Component {

  componentDidMount() {
    document.title='Our Providers'
  }

  render() {
    return(

      <>
        <div>
          <Image src={HCDpageDivider} />
        </div>
        <TopWhiteSpace />
        <MainContainer>
          <Title>
            PRIMARY CARE PROVIDERS
          </Title>
          <Divider />
          <FullSection>
            {profiles.map(profile => {
              return(
                <Profile>
                  <Image src={profile.image} alt={`Profile Picture of ${profile.shortName}`} />
                  <Name>{profile.name}</Name>
                  <p> &nbsp; &nbsp; &nbsp; {profile.shortBio}</p>
                  <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
                    <Modal.Header>{profile.name}</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src={profile.image} />
                      <Modal.Description>
                        <Pic>{profile.bio}<br />{profile.bio2}</Pic>
                        <Divider style={styles.divider}/>
                        <Info>
                          <Edu>
                            <h3>Education and Experience</h3>
                            <Bio>{profile.edu1}</Bio>
                            <Bio>{profile.edu2}</Bio>
                            <Bio>{profile.edu3}</Bio>
                            <Bio>{profile.edu4}</Bio>
                            <Bio>{profile.edu5}</Bio>
                            <Bio>{profile.edu6}</Bio>
                            <Bio>{profile.edu7}</Bio>
                            <Bio>{profile.edu8}</Bio>
                          </Edu>
                          <Interests>
                            <h3>Professional and Personal Interests</h3>
                            <Int>{profile.interest1}</Int>
                            <Int>{profile.interest2}</Int>
                            <Int>{profile.interest3}</Int>
                            <Int>{profile.interest4}</Int>
                            <Int>{profile.interest5}</Int>
                            <Int>{profile.interest6}</Int>
                            <Int>{profile.interest7}</Int>
                          </Interests>
                        </Info>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Profile>
              )
            })}
          </FullSection>
          <HalfWhiteSpace />
          <Title>
            IN HOME ASSESSMENT PROVIDERS
          </Title>
          <Divider />
          <BottomSection>
            {ihapProviders.map(eachProvider =>
              <IhapSection>
                <Ihap tabindex='0'>
                  <State>{eachProvider.state} Providers:</State>
                  <Divider style={styles.stateLine}/>
                  <Names>
                    <p style={styles.names}>
                      <b>
                        {eachProvider.people.map(person =>
                          <>
                            {person}
                            <Divider />
                          </>
                        )}
                      </b>
                    </p>
                    <div>{eachProvider.divider}</div>
                  </Names>
                </Ihap>
              </IhapSection>
            )}
          </BottomSection>
        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};


export default OurProviders;
