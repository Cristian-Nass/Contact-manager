import React from 'react';
import './App.css';
import './components/Contact';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact
      name="Cristian Nass"
      email="cristian.nass@gmail.com"
      phone="0762931896"
      />

      <Contact
      name="Karen Smith"
      email="karen.smith@gmail.com"
      phone="0732931899"
      />

    </div>
  );
}

export default App;
