'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import MaxWidthWrapper from '../MaxWidthWrapper';
import { SoundEnabledContext } from '../SoundEnabledProvider/SoundEnabledProvider';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Header.module.css';

function Header() {
    const id = React.useId();
    const { isSoundEnabled, toggleIsSoundEnabled } =
        React.useContext(SoundEnabledContext);

    return (
        <header className={styles.wrapper}>
            <MaxWidthWrapper className={styles.innerWrapper}>
                <a href='/'>Kool Website</a>

                <button onClick={toggleIsSoundEnabled}>
                    {isSoundEnabled ? <Volume2 /> : <VolumeX />}
                    <VisuallyHidden>
                        {isSoundEnabled
                            ? 'Disable sound effects'
                            : 'Enable sound effects'}
                    </VisuallyHidden>
                </button>
            </MaxWidthWrapper>
        </header>
    );
}

export default Header;
