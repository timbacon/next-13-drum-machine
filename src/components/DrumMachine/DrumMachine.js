'use client';
import React from 'react';
import useSound from 'use-sound';

import { SoundEnabledContext } from '../SoundEnabledProvider/SoundEnabledProvider';
import styles from './DrumMachine.module.css';

const SOUND_SRC = '/909-drums.mp3';

function DrumMachine() {
    const [play] = useSound(SOUND_SRC, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200],
        },
        soundEnabled: true,
    });
    const { isSoundEnabled } = React.useContext(SoundEnabledContext);

    const playSound = id => {
        if (!isSoundEnabled) return;
        play({ id });
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={() => playSound('kick')}>Kick</button>
            <button onClick={() => playSound('hihat')}>Hat</button>
            <button onClick={() => playSound('snare')}>Snare</button>
            <button onClick={() => playSound('cowbell')}>Cowbell</button>
        </div>
    );
}

export default DrumMachine;
