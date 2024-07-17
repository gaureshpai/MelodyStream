'use client'

import React from 'react';
import { useAudio } from '@/content/AudioContext'

const Player = () => {
    const { isPlaying, playTrack, pauseTrack, currentTrack } = useAudio();

    const cleanTrackName = (track: string) => {
        const parts = track.split('/');
        const fileName = parts[parts.length - 1];
        return fileName.replace('.mp3', '');
    };

    return (
        <div className="player-container bg-gray-800 text-white p-4 flex items-center justify-between">
            <div className="track-info">
                <p>Current Track: {cleanTrackName(currentTrack)}</p>
            </div>
            <div className="controls">
                <button
                    className="play-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
                    onClick={() => (isPlaying ? pauseTrack() : playTrack(currentTrack))}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default Player;
