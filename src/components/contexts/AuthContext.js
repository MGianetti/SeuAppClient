import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = props => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe();
  }, []);

  const createUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // async and use try catch: await logout.then->navigate to home page
  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    createUser,
    logOut,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
