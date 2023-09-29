'use client'

import React from 'react';
import GlobalStateProvider from './GlobalStateProvider';

const Provider = ({ children }) => {
    return (
        <>
            <GlobalStateProvider>
                {children}
            </GlobalStateProvider>
        </>
    );
};

export default Provider;