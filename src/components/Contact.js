import React from "react";
import PropTypes from "prop-types";
import profileIcon from "./../img/profile-icon.jpg";

function Contact(props) {
  return (
    <React.Fragment>
      <img src={profileIcon} alt="A user profile icon."/>
      <h4>{props.contactName}</h4>
      <button>Message</button>
      <br/>
    </React.Fragment>
  );
}

Contact.propTypes = {
  contactName: PropTypes.string.isRequired
}

export default Contact;