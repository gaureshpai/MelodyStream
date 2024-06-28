import React from 'react';
import Player from '../components/Player';
import Playlist from '../components/Playlist';
import { AudioProvider } from '@/content/AudioContext';
import '@/public/styles/globals.css';

const Home = () => {
    return (
        <AudioProvider>
            <div className="app-container">
                <Player />
                <Playlist />
            </div>
        </AudioProvider>
    );
};

export default Home;
