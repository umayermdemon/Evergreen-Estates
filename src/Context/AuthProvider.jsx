import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader]=useState(true)

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  

  const signInUser=(email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email,password)
  }

  const signWithGoogle=()=>{
    setLoader(true)
    return signInWithPopup(auth,googleProvider)
  }
  const signWithGithub=()=>{
    setLoader(true)
    return signInWithPopup(auth,githubProvider)
  }

  const logOut=()=>{
    setLoader(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoader(false)
    })
    return()=>{
      unSubscribe()
    }
  },[])

  const authInfo = { user, createUser,signInUser,logOut,loader,signWithGoogle,signWithGithub };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
