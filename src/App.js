import { useState } from "react";
import './App.css';
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";

function App() {

  const initialContactState= [
    {name: "Michael", lastName: "Jackson", address: "Mulholland Drive", city: "Los Angeles", postalCode: 20250, phoneNumber: 422523336},      
    {name: "Aitor", lastName: "Tilla", address: "C/ de Patata", city: "Cebolla", postalCode: 33001, phoneNumber: 855633322},
    {name: "Felipe", lastName: "Borbón y Grecia", address: "Palacio de la Zarzuela", city: "Madrid", postalCode: 28001, phoneNumber: 654321123},
  ];

  const [contacts, setContacts] = useState(initialContactState);

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Agenda contacts = {contacts} setContacts = {setContacts} />
      <h2 className="my-4">Nuevo contacto</h2>
      <Formulario setContacts={setContacts}/>
    </div>
  );
}

export default App;