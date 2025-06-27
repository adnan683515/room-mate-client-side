import React, { useEffect, useReducer, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';

const provider = new GoogleAuthProvider()

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [mode, setMode] = useState(false)
    const promotions = useRef(null)
    const aboutUs = useRef(null)

    const handlePromoitns = (section) => {
        if (section?.current) {
            section?.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileUser = (obj) => {
        setLoading(true)
        return updateProfile(auth.currentUser, obj)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (curUser) => {
            if (curUser) {
                setUser(curUser)
            }
            setLoading(false)
        })
        return (() => {
            unsuscribe()
        })
    }, [loading])

    const handlePassword = (email) => {

        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    const googleSingin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const info = {
        loading,
        setLoading,
        handleRegister,
        updateProfileUser,
        setUser,
        login,
        user,
        handleLogout,
        googleSingin,
        handlePassword,
        mode,
        setMode,
        handlePromoitns,
        promotions,
        aboutUs,

    }
    return (
        <AuthContext value={info} >
            {children}
        </AuthContext>
    );
};

export default Provider;