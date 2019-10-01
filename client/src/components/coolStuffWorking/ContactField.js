import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form';


class ContactField extends Component {


  render() {
    return(

      <NetlifyForm name="Contact" method="POST" data-netlify="true">
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div id='contactUsLoading'>Loading...</div>
            }
            {error &&
              <div id='contactUsError'>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div id='contactUsSuccess'>Thank you for contacting us!</div>
            }
            {!loading && !success &&

              <div id='contactFieldInputField'>
                <div id='contactFieldNames'>
                  <div id='contactFieldFirst'>
                    <label htmlFor="fname">First Name*</label>
                    <input type="text" id="fname" name="firstname" required />
                  </div>
                  <div id='contactFieldLast'>
                    <label htmlFor="lname">Last Name*</label>
                    <input type="text" id="lname" name="lastname" required />
                  </div>
                </div>
                <div id='contactFieldEmail'>
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" placeholder="example@domain.com" required />
                </div>
                <div id='contactFieldPhone'>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="1233456789" />
                </div>
                <div id='contactFieldMessage'>
                  <label htmlFor="subject">Message*</label>
                  <textarea id="subject" name="subject" placeholder="How can we help?.." required></textarea>
                </div>
                <div id='contactFieldSubmit'>
                  <button type="submit">Send</button>
                </div>
                <p id='contactFieldRequired'>* required</p>
              </div>
            }
          </div>
        )}
      </NetlifyForm>
    )
  }
}


        // <div id='contactForm'>
        //     <label id="contactName">Name: <input type="text" name="name" /></label>
        //     <label id="contactEmail">Email: <input type="email" name="email" /></label>
        //     <label id="contactPhone">Phone: <input type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required /></label>
        //     <label id="contactMessage">Message: <textarea name="message"></textarea></label>
        //     <button type="submit" id="contactSubmit">Send</button>
        // </div>



export default ContactField;
