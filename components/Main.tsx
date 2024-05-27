import React from 'react';
import Loop from './loop';
import MusicStore from './MusicStore';
import PlaySearch from './playSearch';

const Main = () => {
    return (
        <div>

            <main>
                <Loop />
                <MusicStore />
                <PlaySearch />
            </main>
        </div>
    );
};

export default Main;
