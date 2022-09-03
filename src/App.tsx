import React from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {GitHub} from './components/GitHub';
import {Introduction} from './components/Introduction';
import {OnlinePresences} from './components/OnlinePresences';
import {ParallaxMountains} from './components/ParallaxMountains';
import {Projects} from './components/Projects';

function App() {
    return (
        <>
            <ParallaxMountains />
            <Introduction />
            <Projects />
            <GitHub />
            <OnlinePresences />
            <Footer />
        </>
    );
}

export default App;
