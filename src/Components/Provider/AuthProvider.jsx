import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (acc) => {
      if (acc) {
        setUser(acc);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const values = {
    user,
    loading,
    loginWithEmail,
    signUpWithEmail,
    signinWithGoogle,
    signOutUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
