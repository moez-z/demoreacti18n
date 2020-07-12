import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18next/i18n'

function App() {
  return (
    <div className="App">
 <h2>
   {i18n.t('welcome')}
 </h2>
    </div>
  );
}

export default App;
