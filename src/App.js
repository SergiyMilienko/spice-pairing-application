import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import './App.css';
import Navbar from './components/Navbar';
import SpicesHeader from './components/SpicesHeader';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar />
        <SpicesHeader />
      </div>
    </I18nextProvider>
  );
}

export default App;
