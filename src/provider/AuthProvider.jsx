import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


export const authContext = createContext(null);
const gitHubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth, () => {});
  };

  const GithubSignIn=()=>{
    return signInWithPopup(auth, gitHubProvider);
  }
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUsr) => {
      // console.log(currentUsr)
      setUser(currentUsr);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const commonInfo = { signUp, signIn, user, logOut,GithubSignIn,googleSignIn };
  return (
    <authContext.Provider value={commonInfo}>{children}</authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
