import {getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from '../../Firebase/firebase.init';
import {useState} from 'react';


initializeAuthentication();




const LogIn = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const handleGoogleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result =>{
           setUser(result.user);
        });
    }

    // Observer
        useEffect(()=>{
            const unsubscribed = onAuthStateChanged(auth, user =>{
                if(user){
                    setUser(user);
                }
                else{
                    setUser({})
                }
            });
            return ()=>unsubscribed;
        },[])

        const logOut = ()=>{
            signOut(auth)
                .then(() =>{ });
        }

    
    return {
        user,
        handleGoogleSignIn,
        logOut
        
    }
}
export default LogIn;