import React, { Component } from 'react';
import './contact-page.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <div className="lets">Let us</div>
        <div className="details">
          <div className="name">Zaki Wasik</div>
          <div className="phone">+45 20768587</div>
          <div className="mail"><img src="https://zkwsk.ams3.digitaloceanspaces.com/zkwsk_assets/mail.svg" alt=""/></div>
        </div>
        <div className="meet">Meet</div>
      </div>
    );
  }
}

export default ContactPage;
