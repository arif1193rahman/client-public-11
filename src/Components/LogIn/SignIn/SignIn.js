import React from 'react';
import useAuth from '../Hooks/useAuth';

const SignIn = () => {
    const {handleGoogleSignIn} = useAuth();
    return (
        <div className="mt-3">
            <button onClick={handleGoogleSignIn} className="btn btn-success">Google Lig In</button>
        </div>
    );
};

export default SignIn;