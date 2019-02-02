import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';
import Styled from 'styled-components';


const FullSection = Styled.div`
  max-height: 250px;
  max-width: 1170px;
`

const Title = Styled.h2`
  font-size: 24px;
  font-weight: bold;
`

const TopPart = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
`

const Name = Styled.h3`
  padding: 15px 0 0 30px;
`

const QuoteBox = Styled.div`
  border-radius: 5px;
  background-color: #DEDEDF;
  min-height: 50px;
  font-size: 15px;
`

const Quote = Styled.div`
  max-width: 1100px;
  padding-left: 10px;
`

const styles = {
  carousel:{
    minHeight: '250px',
  },

  line:{
    margin: '6px 0 6px 3px',
  },
}

class Testimonials extends Component {
  render() {
    return (
      <FullSection>
        <TopPart>
          <Title>
            TESTIMONIALS
          </Title>
          <Divider style={styles.line} />
        </TopPart>
        <Carousel style={styles.carousel}>

          <div>
            <Name>Judy, patient's mother</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Dr. Cacciamani, I appreciate all you do to make lives better for people with disabilities.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Joseph, patient's son</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Dear Dr. Cacciamani and Staff, Thank you for all of your help and great service in regards to our family. You all have been amazing and kind to us; your professionalism is the best! Being able to care for dad, through his last days at his home, was of the utmost importance to us as those were his true wishes. Thanks again!</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Rosemary, patient's daughter</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Dr. Strong, Thank you for all of your kind and tender care to my mother. You were so good to her. I appreciate all of your visits and excellent care.</p>
              </Quote>
          </QuoteBox>
          </div>
          <div>
            <Name>Sherrie, patient's daughter</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Dear Perrine, Thank you for taking such good care of mom. You were always so patient, and caring, and thoughtful.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Steve, patient's son</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Dr. Cacciamani, I appreciate the support shown to me and my mother. Both you and your staff show a level of concern that is very refreshing in today's world.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Jimmy, patient</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Caitlin, you have been a bright ray of sunshine and love to me when I have been sicker, lost, and upset. When I got off the phone I had already started to feel better.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Wendy Mohlman, RN, BSN</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; The House Call Doctors office staff is friendly and prompt. They do a wonderful job of communicating by email or phone. We don't need to wait days for a return call when we have a concern or need.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Wendy Mohlman, RN, BSN</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; Perrine Anderson, NP, makes her patients laugh. Her patients feel a sense of calmness and security that she will address their problems and listens. Perrine specializes in mental health and suffering from the mental affects associated with aging.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Wendy Mohlman, RN, BSN</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; Dr. Cacciamani, who specializes in geriatrics, dementia and hospice, has an endearing approach to his patients. His bedside manner exhibits how deeply he cares about his patients. I have witnessed him singing to them for their birthday-he makes the residents smile with his fun personality!</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Wendy Mohlman, RN, BSN</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; As the director of nursing in an assisted-living community, I have been privileged to work closely with House Call Doctors. (Dr. Mark Cacciamani, Dr. Sharon Strong, and Perrine Anderson, NP), along with all their helpful, friendly staff within the office.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Barbara, Patient</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; To my special doctor and his special nurse, thank you for all your care and love.</p>
              </Quote>
            </QuoteBox>
          </div>
          <div>
            <Name>Rachel Gathro, Medical Coordinator Chrysalis Group Home, Provo</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; Dr. Cacciamani adapts to each patient to make the appointment as comfortable and pleasant as possible.</p>
              </Quote>
          </QuoteBox>
          </div>
          <div>
            <Name>John L.C. Stevens, Regional Director Danville Services, Provo</Name>
            <QuoteBox>
              <Quote>
                <p>&nbsp;&nbsp; Dr. Cacciamani is far more than just an outstanding physician. He is a true advocate, activist, and champion for the rights and services for people with disabilities.</p>
              </Quote>
            </QuoteBox>
          </div>

        </Carousel>
      </FullSection>
    );
  }
}


export default Testimonials;
