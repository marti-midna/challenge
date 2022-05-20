import React from "react";

export default function CardContact({ contactData, deleteContact }) {

   

  return (
    <div>
      <p>{contactData.nome}</p>
      <p>{contactData.cognome}</p>
      <p>{contactData.numero}</p>
      <button onClick={() => deleteContact(contactData.nome)}>x</button>
    </div>
  );
}

