import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [currentView, setCurrentView] = useState('about');
  const changeView = (view) => setCurrentView(view);

  return (
    <div>
      <Header currentView={currentView} changeView={changeView}/>
      <Main currentView={currentView}/>
      <Footer />
    </div>
  );
}

export default App;
