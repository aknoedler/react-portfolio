import React from 'react';

export default function Navigation() {
  const linkStyle = { border: '1px black', padding: '5px' };
  let [view, setView] = useState("About");

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
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}