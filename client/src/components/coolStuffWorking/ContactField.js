import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form';


class ContactField extends Component {


  render() {
    return(

      <NetlifyForm name="Contact" method="POST" data-netlify="true">
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div className='status loading'>Loading... <Icon loading name='spinner' /></div>
            }
            {error &&
              <div className='status error'>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div className='status success'>Thank you for contacting us!</div>
            }
            {!loading && !success &&

              <div id='contactFieldContainer'>
                <div className='contactFieldGroups'>
                  <div className='contactField first'>
                    <label className='label' htmlFor="fname">First*</label>
                    <input className='input' type="text" id="fname" name="firstname" required />
                  </div>
                  <div className='contactField last'>
                    <label className='label' htmlFor="lname">Last*</label>
                    <input className='input' type="text" id="lname" name="lastname" required />
                  </div>
                </div>
                <div className='contactFieldGroups'>
                  <div className='contactField email'>
                    <label className='label' htmlFor="email">Email*</label>
                    <input className='input' type="email" id="email" name="email" placeholder="example@domain.com" required />
                  </div>
                  <div className='contactField phone'>
                    <label className='label' htmlFor="phone">Phone</label>
                    <input className='input' type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="1234567890" />
                  </div>
                </div>
                <div className='contactField message'>
                  <label className='label' htmlFor="subject">Message*</label>
                  <textarea className='input message' id="subject" name="subject" placeholder="How can we help?.." required></textarea>
                </div>
                <div className='contactField submit'>
                  <button id='submitBtn' type="submit">Send</button>
                </div>
                <p className='contactField required'>* required</p>
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
