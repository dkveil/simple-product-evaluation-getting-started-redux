import React from 'react';
import './App.css';
import Form from './components/Form';
import PhonePicture from './assets/phone.jpg'
import RatesList from './components/RateList';

function App() {
  return (
    <div className='App'>
      <Form />
      <img src={PhonePicture} alt="phone" height="200px"/>
      <RatesList/>
    </div>
  );
}

export default App;
