import React from 'react';
import { createContext } from 'react';
import LogIn from '../Components/LogIn/LogIn';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const allContext = LogIn();

    return (
       <AuthContext.Provider value={allContext}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;