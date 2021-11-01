import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../../../Firebase/firebase.init";
import { useState, useEffect } from "react";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
      const [isLoading, setLoading] = useState(true);

 

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
  };

  useEffect(()=>{
                 const unsubscribed = onAuthStateChanged(auth, user =>{
                     if(user){
                         setUser(user)
                    }
                     else{
                     setUser({})
                     }
                setLoading(false);
                 })
                 return ()=>unsubscribed;
             },[])
    

  const logOut = ()=>{
                  setLoading(false)
               signOut(auth)
                     .then(() =>{ 
                        setUser({})
                     })
                     
                      .finally(()=>setLoading(false))
            }

  return {
    user,
    setUser,
    signInWithGoogle,
    logOut,isLoading,setLoading
  };
};

export default useFirebase;
