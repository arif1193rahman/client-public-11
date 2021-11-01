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
 

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = ()=>{
                //  setLoading(false)
              return signOut(auth)
                    //  .then(() =>{ })
                    //  .finally(()=>setLoading(false));
            }

  return {
    user,
    setUser,
    signInWithGoogle,
    logOut
  };
};

export default useFirebase;
