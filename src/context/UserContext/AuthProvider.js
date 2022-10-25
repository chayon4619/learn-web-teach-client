import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const gitHubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    };

    const logOut = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = { user, createUser, login, googleLogin, gitHubLogin, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;