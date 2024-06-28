'use client'
import React from 'react';
import Track from './Track';

const tracks = [
    'track1.mp3',
    'track2.mp3',
    'track3.mp3',
];

const Playlist = () => {
    return (
        <div className="playlist-container bg-gray-100 p-4">
            <h2 className="text-2xl mb-4">Playlist</h2>
            {tracks.map((track, index) => (
                <Track key={index} track={track} />
            ))}
        </div>
    );
};

export default Playlist;
