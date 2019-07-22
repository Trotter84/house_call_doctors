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

const DividerLine = Styled(Divider)`
  margin: 6px 0 6px 3px;
`

const CarouselStyle = Styled(Carousel)`
  min-height: 250px;
`


const testimonials = [
  {
    name: "Judy, patient's mother",
    quote: "Dr. Cacciamani, I appreciate all you do to make lives better for people with disabilities.",
  },
  {
    name: "Joseph, patient's son",
    quote: "Dear Dr. Cacciamani and Staff, Thank you for all of your help and great service in regards to our family. You all have been amazing and kind to us; your professionalism is the best! Being able to care for dad, through his last days at his home, was of the utmost importance to us as those were his true wishes. Thanks again!",
  },
  {
    name: "Rosemary, patient's daughter",
    quote: "Dr. Strong, Thank you for all of your kind and tender care to my mother. You were so good to her. I appreciate all of your visits and excellent care.",
  },
  {
    name: "Sherrie, patient's daughter",
    quote: "Dear Perrine, Thank you for taking such good care of mom. You were always so patient, and caring, and thoughtful.",
  },
  {
    name: "Steve, patient's son",
    quote: "Dr. Cacciamani, I appreciate the support shown to me and my mother. Both you and your staff show a level of concern that is very refreshing in today's world.",
  },
  {
    name: "Jimmy, patient",
    quote: "Caitlin, you have been a bright ray of sunshine and love to me when I have been sicker, lost, and upset. When I got off the phone I had already started to feel better.",
  },
  {
    name: "Wendy Mohlman, RN, BSN",
    quote: "The House Call Doctors office staff is friendly and prompt. They do a wonderful job of communicating by email or phone. We don't need to wait days for a return call when we have a concern or need.",
  },
  {
    name: "Wendy Mohlman, RN, BSN",
    quote: "Perrine Anderson, NP, makes her patients laugh. Her patients feel a sense of calmness and security that she will address their problems and listens. Perrine specializes in mental health and suffering from the mental affects associated with aging.",
  },
  {
    name: "Wendy Mohlman, RN, BSN",
    quote: "As the director of nursing in an assisted-living community, I have been privileged to work closely with House Call Doctors. (Dr. Mark Cacciamani, Dr. Sharon Strong, and Perrine Anderson, NP), along with all their helpful, friendly staff within the office.",
  },
  {
    name: "Wendy Mohlman, RN, BSN",
    quote: "Dr. Cacciamani, who specializes in geriatrics, dementia and hospice, has an endearing approach to his patients. His bedside manner exhibits how deeply he cares about his patients. I have witnessed him singing to them for their birthday-he makes the residents smile with his fun personality!",
  },
  {
    name: "Barbara, Patient",
    quote: "To my special doctor and his special nurse, thank you for all your care and love.",
  },
  {
    name: "Rachel Gathro, Medical Coordinator Chrysalis Group Home, Provo",
    quote: "Dr. Cacciamani adapts to each patient to make the appointment as comfortable and pleasant as possible.",
  },
  {
    name: "John L.C. Stevens, Regional Director Danville Services, Provo",
    quote: "Dr. Cacciamani is far more than just an outstanding physician. He is a true advocate, activist, and champion for the rights and services for people with disabilities.",
  },
]


class Testimonials extends Component {
  render() {
    return (
      <FullSection>
        <TopPart>
          <Title>
            TESTIMONIALS
          </Title>
          <DividerLine />
        </TopPart>
        <CarouselStyle>

          {testimonials.map(person => {
            return(
              <div>
                <Name>{person.name}</Name>
                <QuoteBox>
                  <Quote>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{person.quote}</p>
                  </Quote>
                </QuoteBox>
              </div>
             )
            })}

        </CarouselStyle>
      </FullSection>
    );
  }
}


export default Testimonials;
