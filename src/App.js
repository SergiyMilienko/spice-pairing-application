import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import './App.css';
import Navbar from './components/Navbar';
import SpicesHeader from './components/SpicesHeader';
import Questions from './components/Questions';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<SpicesHeader/>}/>
            <Route path="/questions" element={<Questions/>}/>
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
