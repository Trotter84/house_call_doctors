import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Modal,
  Divider
} from 'semantic-ui-react';
import HCDpageDivider2 from '../../images/HCD_group_divider.jpg';
import profiles from '../ProfileInfo';
import ihapProviders from '../IhapProviders';


const InfoBtn = Styled.button`
  font-size: 1.1rem;
  background-color: white;
  border: none;
  color: black;
  padding-left: 10px;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
    cursor: pointer;
  }
`

const DividerSetLength = Styled(Divider)`
  width: 100%;
`

const DividerStateLine = Styled(Divider)`
  max-width: 100%;
  margin: 3px 0 3px 0;
`


class OurProviders extends Component {

  componentDidMount() {
    document.title = 'Our Providers'
  }

  render() {
    return (
      <>
        <h1 className='pageTitleReader' aria-label="Our Providers page">Our Providers</h1>
        <Image id='image-divider' src={HCDpageDivider2} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='mainContainerOurProviders'>
          <h2>PRIMARY CARE PROVIDERS</h2>
          <Divider />
          <div id='profileSectionOurProviders'>
            {profiles.map(profile => {
              return (
                <div id='eachProfileOurProviders'>
                  <img src={profile.image} alt={`Profile of ${profile.shortName}`}></img>
                  <h3>{profile.name}</h3>
                  <p> &nbsp; &nbsp; &nbsp; {profile.shortBio}</p>
                  <Modal trigger={<InfoBtn>More Info..</InfoBtn>} closeIcon>
                    <h3 id='ourProvidersInsideName'>{profile.name}</h3>
                    <Divider />
                    <div id='ourProviderContent'>
                      <img id='ourProvidersInsideImage' src={profile.image} alt={`Profile of ${profile.shortName}`}></img>
                      <div id='ourProvidersInsideBio'> &nbsp; &nbsp; &nbsp; {profile.bio}<br /><br /> &nbsp; &nbsp; &nbsp; {profile.bio2}</div>
                      <DividerSetLength />
                      <div id='ourProvidersInfo'>
                        <div id='ourProvidersEduContainer'>
                          <h3 className='ourProvidersInfoTitle'>Education and Experience</h3>
                          <p className='ourProvidersEdu'>{profile.edu1}</p>
                          <p className='ourProvidersEdu'>{profile.edu2}</p>
                          <p className='ourProvidersEdu'>{profile.edu3}</p>
                          <p className='ourProvidersEdu'>{profile.edu4}</p>
                          <p className='ourProvidersEdu'>{profile.edu5}</p>
                          <p className='ourProvidersEdu'>{profile.edu6}</p>
                          <p className='ourProvidersEdu'>{profile.edu7}</p>
                          <p className='ourProvidersEdu'>{profile.edu8}</p>
                        </div>
                        <div id='ourProvidersIntContainer'>
                          <h3 className='ourProvidersInfoTitle'>Professional and Personal Interests</h3>
                          <p className='ourProvidersInt'>{profile.interest1}</p>
                          <p className='ourProvidersInt'>{profile.interest2}</p>
                          <p className='ourProvidersInt'>{profile.interest3}</p>
                          <p className='ourProvidersInt'>{profile.interest4}</p>
                          <p className='ourProvidersInt'>{profile.interest5}</p>
                          <p className='ourProvidersInt'>{profile.interest6}</p>
                          <p className='ourProvidersInt'>{profile.interest7}</p>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              )
            })}
          </div>
          <h2 id='ourProvidersTitle'>
            IN HOME ASSESSMENT PROVIDERS
          </h2>
          <Divider />
          <div id='ourProvidersBottomSection'>
            {ihapProviders.map(eachProvider =>
              <div id='ourProvidersIhapSection'>
                <div id='ourProvidersIhap' tabindex='0'>
                  <h3 id='ourProvidersState'>{eachProvider.state} Providers:</h3>
                  <DividerStateLine />
                  <div>
                    <p id='ourProvidersNamesState'>
                      <b>
                        {eachProvider.people.map(person =>
                          <>
                            <p id='stateProvider'>{person}</p>
                            <Divider id='providerDivider' />
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
          <div id='ourProvidersWhiteSpace'></div>
        </div>
      </>
    )
  }
};


export default OurProviders;
