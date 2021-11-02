import React from "react";
import useAuth from "./Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import './LogIn.css';

const LogIn = () => {
  const { signInWithGoogle, setUser,  setLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/"

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user)
        history.push(url)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  
  return (
    <div>
      <div className="mt-3 log">
        <button onClick={handleGoogleSignIn} className="btn btn-success">
          Google Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;

