import {getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from '../../Firebase/firebase.init';
import {useState} from 'react';
// import {useHistory, useLocation} from 'react-router-dom';


initializeAuthentication();




const LogIn = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    // const history = useHistory();
    // const location = useLocation();


    // const url = location.state?.from || "/"

    const handleGoogleSignIn = ()=>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result =>{
           setUser(result.user);
        //    history.push(url)
        })
        .finally(()=>setLoading(false));
    }

   

    // Observer
        useEffect(()=>{
            const unsubscribed = onAuthStateChanged(auth, user =>{
                if(user){
                    setUser(user)
                }
                else{
                    setUser({})
                }
                setLoading(false);
            });
            return ()=>unsubscribed;
        },[])

        const logOut = ()=>{
            setLoading(false)
            signOut(auth)
                .then(() =>{ })
                .finally(()=>setLoading(false));
        }

    
    return {
        user,
        handleGoogleSignIn,
        logOut,
        isLoading
        
    }
}
export default LogIn;