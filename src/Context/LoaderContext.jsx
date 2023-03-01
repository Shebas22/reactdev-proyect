import React, { createContext, useEffect, useState } from 'react'

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    return (
        <LoaderContext.Provider
            value={{
                setLoading
            }}>
            {children}
        </LoaderContext.Provider>
    );
}
