import React from 'react'
import { useState } from 'react';

export default function Formulario({ setContacts }) {

  //const [name, setName] = useState('');
  //const [lastName, setLastName] = useState('');
  //const [phoneNumber, setPhoneNumber] = useState('');
  //const [address, setAddress] = useState('');
  //const [postalCode, setPostalCode] = useState('');
  //const [city, setCity] = useState('');

  //function handleName(e) {
  //  setName(e.target.value);
  //};
  //function handleLastName(e) {
  //  setLastName(e.target.value);
  //};
  //function handlePhoneNumber(e) {
  //  setPhoneNumber(e.target.value);
  //};
  //function handleAddress(e) {
  //  setAddress(e.target.value);
  //};
  //function handlePostalCode(e) {
  //  setPostalCode(e.target.value);
  //};
  //function handleCity(e) {
  //  setCity(e.target.value);
  //};

  const initialState = {
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    city: '' 
  }

  const [form, setForm] = useState(initialState);

  function handleInput(e) {
    const inputName = e.target.id;
    const newValue = e.target.value;
    setForm({...form, ...{[inputName]: newValue}});
  }

  function submit(e) {
    e.preventDefault();

    //const newContact = {
    //  name: form.name,
    //  lastName: form.lastName,
    //  phoneNumber: form.phoneNumber,
    //  address: form.address,
    //  postalCode: form.postalCode,
    //  city: form.city,
    //};

    //const newContact = {name, lastName, phoneNumber, address, postalCode, city};

    setContacts(currentContacts => [...currentContacts, form]);

    //e.target.reset(); // Vacia el formulario, pero no los estados
    //setName('');
    //setLastName('');
    //setPhoneNumber('');
    //setAddress('');
    //setPostalCode('');
    //setCity('');
    setForm(initialState); // Reinicia el formulario
  }

  return (
    <form className='form-group' onSubmit={submit}>
      <input id="name"        className='form-control mb-3'      value={form.name}        type="text" onChange={handleInput} placeholder='Introduce el nombre' />
      <input id="lastName"    className='form-control mb-3'      value={form.lastName}    type="text" onChange={handleInput} placeholder='Introduce los apellidos' />
      <input id="phoneNumber" className='form-control mb-3'      value={form.phoneNumber} type="text" onChange={handleInput} placeholder='Introduce el teléfono' />
      <input id="address"      className='form-control mb-3'      value={form.address}     type="text" onChange={handleInput} placeholder='Introduce la dirección' />
      <input id="postalCode"  className='form-control mb-3'      value={form.postalCode}  type="text" onChange={handleInput} placeholder='Introduce el código postal' />
      <input id="city"        className='form-control mb-3'      value={form.city}        type="text" onChange={handleInput} placeholder='Introduce la ciudad' />
      <input type="submit"    className='btn btn-success ml-auto' value="Registrar" />
    </form>
  )
}