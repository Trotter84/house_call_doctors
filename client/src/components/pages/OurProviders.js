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

const DividerSetLength = Styled(Divider)`
  width: 527px;
`

const DividerStateLine = Styled(Divider)`
  max-width: 276px;
`


class OurProviders extends Component {

  componentDidMount() {
    document.title='Our Providers'
  }

  render() {
    return(

      <>
        <div id='imageDividerContainer'>
          <Image id='imageDivider' src={HCDpageDivider} />
        </div>
        <div id='ourProvidersTopWhiteSpace'></div>
        <div id='ourProvidersMainContainer'>
          <h2 id='ourProvidersTitle'>
            PRIMARY CARE PROVIDERS
          </h2>
          <Divider />
          <div id='ourProvidersFullSection'>
            {profiles.map(profile => {
              return(
                <div id='ourProvidersProfile'>
                  <Image id='ourProvidersImage' src={profile.image} alt={`Profile Picture of ${profile.shortName}`} />
                  <h3 id='ourProvidersName'>{profile.name}</h3>
                  <p id='ourProvidersShortBio'> &nbsp; &nbsp; &nbsp; {profile.shortBio}</p>
                  <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
                    <Modal.Header>{profile.name}</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src={profile.image} />
                      <Modal.Description>
                        <div id='ourProvidersPic'>{profile.bio}<br />{profile.bio2}</div>
                        <DividerSetLength />
                        <div id='ourProvidersInfo'>
                          <div id='ourProvidersEdu'>
                            <h3>Education and Experience</h3>
                            <p id='ourProvidersBio'>{profile.edu1}</p>
                            <p id='ourProvidersBio'>{profile.edu2}</p>
                            <p id='ourProvidersBio'>{profile.edu3}</p>
                            <p id='ourProvidersBio'>{profile.edu4}</p>
                            <p id='ourProvidersBio'>{profile.edu5}</p>
                            <p id='ourProvidersBio'>{profile.edu6}</p>
                            <p id='ourProvidersBio'>{profile.edu7}</p>
                            <p id='ourProvidersBio'>{profile.edu8}</p>
                          </div>
                          <div id='ourProvidersInterests'>
                            <h3>Professional and Personal Interests</h3>
                            <p id='ourProvidersInt'>{profile.interest1}</p>
                            <p id='ourProvidersInt'>{profile.interest2}</p>
                            <p id='ourProvidersInt'>{profile.interest3}</p>
                            <p id='ourProvidersInt'>{profile.interest4}</p>
                            <p id='ourProvidersInt'>{profile.interest5}</p>
                            <p id='ourProvidersInt'>{profile.interest6}</p>
                            <p id='ourProvidersInt'>{profile.interest7}</p>
                          </div>
                        </div>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </div>
              )
            })}
          </div>
          <div id='ourProvidersHalfWhiteSpace'></div>
          <h2 id='ourProvidersTile'>
            IN HOME ASSESSMENT PROVIDERS
          </h2>
          <Divider />
          <div id='ourProvidersBottomSection'>
            {ihapProviders.map(eachProvider =>
              <div id='ourProvidersIhapSection'>
                <div id='ourProvidersIhap' tabindex='0'>
                  <h2 id='ourProvidersState'>{eachProvider.state} Providers:</h2>
                  <DividerStateLine />
                  <div id='ourProvidersNames'>
                    <p>
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div id='ourProvidersWhiteSpace'></div>
      </>
    )
  }
};


export default OurProviders;
