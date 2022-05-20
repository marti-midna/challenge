import { useState } from "react";

const AddContact = ({inputsApp}) => {
  const [nomeInput, setNomeInput] = useState("");
  const [cognomeInput, setCognomeInput] = useState("");
  const [numeroInput, setNumeroInput] = useState("");

  const onSendData = (e) => {
    e.preventDefault();
    console.log(nomeInput, cognomeInput, numeroInput)
    inputsApp(nomeInput, cognomeInput, numeroInput);
  };

  return (
    <form onSubmit={onSendData}>
      <input
        type="text"
        id="nome"
        value={nomeInput}
        placeholder="nome"
        onChange={(e) => setNomeInput(e.target.value)}
      />

      <input
        type="text"
        id="cognome"
        value={cognomeInput}
        placeholder="cognome"
        onChange={(e) => setCognomeInput(e.target.value)}
      />

      <input
        type="number"
        id="number"
        value={numeroInput}
        placeholder="numero"
        onChange={(e) => setNumeroInput(e.target.value)}
      />

      <input type="submit" value="Invia" />
    </form>
  );
};

export default AddContact;
