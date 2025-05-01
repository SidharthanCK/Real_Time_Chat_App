import React from 'react';
import './Signin.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Signin({ auth }) {
  const signInWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth, provider)           
      .then((result) => {
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  return (
    <div>
      <p>Sign in to start chat</p>
      <button className="sign-in-btn" onClick={signInWithGoogle}>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol-700x394.png"
          alt=""
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}

export default Signin;
