import React from "react";
import Contact from "./Contact";

const mainContactsList = [
  {
    contactName: 'moesunnysideup',
  },
  {
    contactName: 'markrenton'
  },
  {
    contactName: 'headupkorea'
  }
];

function ContactsList() {
  return (
    <React.Fragment>
      <h4 id="contact-header">Contacts List</h4>
      {mainContactsList.map((contact, index) =>
        <Contact contactName={contact.contactName}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default ContactsList;