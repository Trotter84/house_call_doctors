import React, { Component } from 'react';
import Styled from 'styled-components';


const Names = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
`

const First = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  font-weight: bold;
`

const Last = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  font-weight: bold;
`

const Email = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  font-weight: bold;
`

const Phone = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  font-weight: bold;
`

const Message = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  font-weight: bold;
`

const Submit = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
`

const InputField = Styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 27px 0 0 30px;
  min-width: 300px;
  max-width: 350px;
  min-height: 275px;
`



class ContactField extends Component {


  render() {
    return(
      <InputField>
        <Names>
          <First>
            <label htmlFor="fname">First Name*</label>
            <input type="text" id="fname" name="firstname" required />
          </First>
          <Last>
            <label htmlFor="lname">Last Name*</label>
            <input type="text" id="lname" name="lastname" required />
          </Last>
        </Names>
        <Email>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" placeholder="example@domain.com" required />
        </Email>
        <Phone>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="1233456789" />
        </Phone>
        <Message>
          <label htmlFor="subject">Message*</label>
          <textarea id="subject" name="subject" placeholder="How can we help?.." required></textarea>
        </Message>
        <Submit>
          <a href="mailto:flare84@gmail.com?subject=Interested Client&body={'fname'}">Submit</a>
        </Submit>
      </InputField>
    )
  }
}


export default ContactField;
