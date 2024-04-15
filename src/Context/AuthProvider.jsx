import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

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

  const authInfo = { user, createUser,signInUser,logOut,loader };
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
