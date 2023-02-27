import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentView, changeView }) {
  return (
    <header>
      <Navigation currentView={currentView} changeView={changeView}/>
    </header>
  );
}