import React from 'react';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';

export default function Main({ currentView }) {

    const viewSwitch = (title) => {
        switch (title) {
            case 'about':
                return (<About />);
            case 'portfolio':
                return (<Portfolio />);
            case 'contact':
                return (<Contact />);
            case 'resume':
                return (<Resume />);
            default:
                return (<About />);
        }
    }

    return (
        <main>
            {viewSwitch(currentView)}
        </main>
    );
}