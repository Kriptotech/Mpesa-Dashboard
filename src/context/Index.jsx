import React, { createContext, useState, useEffect } from "react";

export const appContext = createContext(null);

export function MainContext({ children }) {
    // states
    const [asideVisible, setasideVisible] = useState(true);

   

    // values to be shared across the context
    var contextValues = {
        setasideVisible,
        asideVisible,
    };

    return (
        <appContext.Provider value={contextValues}>
            {children}
        </appContext.Provider>
    );
}
