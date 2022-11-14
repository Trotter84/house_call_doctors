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


const InfoBtn = Styled.button`
  font-size: 15px;
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
  max-width: 276px;
  margin: 3px 0 3px 0;
`


class OurProviders extends Component {

  componentDidMount() {
    document.title='Our Providers'
  }

  render() {
    return(

      <>
        <h1 className='pageTitleReader' aria-label="Our Providers page">Our Providers</h1>
        <div id='imageDividerContainer'>
          <Image id='imageDivider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
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
                  <img id='ourProvidersImage' src={profile.image} alt={`Profile of ${profile.shortName}`}></img>
                  <h3 id='ourProvidersName'>{profile.name}</h3>
                  <p id='ourProvidersShortBio'> &nbsp; &nbsp; &nbsp; {profile.shortBio}</p>
                  <Modal trigger={<InfoBtn>More Info</InfoBtn>} closeIcon>
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
          <div id='ourProvidersHalfWhiteSpace'></div>
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
