'use client'

import { createContext, useState } from 'react';

export const GLOBAL_CONTEXT = createContext();

const GlobalStateProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <GLOBAL_CONTEXT.Provider value={{ open, setOpen }} >{children}</GLOBAL_CONTEXT.Provider>
    );
};

export default GlobalStateProvider;