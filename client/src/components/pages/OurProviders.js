import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Header,
  Image,
  Modal,
  Divider
} from 'semantic-ui-react'
import {
  Link,
  Route,
  NavLink
} from 'react-router-dom';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import profiles from '../ProfileInfo';



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

const Pic = Styled(NavLink)`
  &.active {
    transform: scale(1.02);
  }
`

const Name = Styled.h3`
  color: #AF3120;
  padding-bottom: 10px;
`

const InfoSection = Styled.div`
  display: none;
  :target {
    display: block;
  }
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

const Bio = Styled.p`
  max-width: 600px;
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
            {profiles.map(profile => {
              return(
                <Profile>
                  <Image src={profile.image} alt={`Profile Picture of ${profile.shortName}`} />
                  <Name>{profile.name}</Name>
                  <p> &nbsp; &nbsp; &nbsp; {profile.bio}</p>
                  <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
                    <Modal.Header>{profile.name}</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src={profile.image} />
                      <Modal.Description>
                        <Bio>{profile.bio}</Bio>
                        <Divider style={styles.divider}/>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Profile>
              )
            })}

          </FullSection>

        </MainContainer>
        <WhiteSpace />
      </>
    )
  }
};


export default OurProviders;
