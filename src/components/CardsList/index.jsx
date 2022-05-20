import React from "react";
import CardContact from "../CardContact";

const CardList = ({ contactData, searchContact, deleteContact }) => {
    
    
  return (
    <div>
      {contactData &&
        contactData
          .filter(
            (item) =>
              item.nome
                .toLowerCase()
                .trim()
                .includes(searchContact.toLowerCase().trim()) ||
              item.cognome
                .toLowerCase()
                .trim()
                .includes(searchContact.toLowerCase().trim())
          )
          .map((item) => <CardContact contactData={item} key={item.nome} deleteContact={deleteContact}/>)}
    </div>
  );
};

export default CardList;
