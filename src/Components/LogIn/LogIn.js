import React from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';


initializeAuthentication();

const provider = new GoogleAuthProvider();

const LogIn = () => {

    const handleGoogleSignIn = ()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Lig In</button>
        </div>
    );
};

export default LogIn;