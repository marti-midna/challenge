import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import CardList from './components/CardsList';
import SearchContact from './components/SearchContact';

function App() {
  const [contactData, setContactData] = useState([]);
  const [searchContact, setSearchContact] = useState('');

  const inputsApp = (nomeInput, cognomeInput, numeroInput) => {
    const contatto = {
      nome: nomeInput,
      cognome: cognomeInput,
      numero: numeroInput,
    }
    console.log('questo è il tuo contatto',contatto);
    setContactData([contatto, ...contactData]);
  }

  const deleteContact = (value) => {
    const arr2 = contactData.filter(item => item.nome !== (value));
    setContactData(arr2);
  }

  return (
    <div className="App">
      <AddContact inputsApp={inputsApp}/>
      <SearchContact setSearchContact={setSearchContact}/>
      <CardList contactData={contactData} searchContact={searchContact} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;


