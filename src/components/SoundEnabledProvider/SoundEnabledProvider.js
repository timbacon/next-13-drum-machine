'use client';
import React from 'react';

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
    const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
    return (
        <SoundEnabledContext.Provider
            value={{
                isSoundEnabled,
                toggleIsSoundEnabled: () => setIsSoundEnabled(prev => !prev),
            }}
        >
            {children}
        </SoundEnabledContext.Provider>
    );
}

export default SoundEnabledProvider;
