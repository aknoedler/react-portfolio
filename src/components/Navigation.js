import React from 'react';

export default function Navigation({ currentView, changeView }) {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav>
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={linkStyle}
          onClick={() => changeView('about')}
          className={currentView === 'about' ? 'nav-link active' : 'nav-link'}
        >
          <a href="#about">About Me</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => changeView('portfolio')}
          className={currentView === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <a href="#portfolio">Portfolio</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => changeView('contact')}
          className={currentView === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          <a href="#contact">Contact</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => changeView('resume')}
          className={currentView === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          <a href="#resume">Resume</a>
        </div>
      </section>
    </nav>
  );
}