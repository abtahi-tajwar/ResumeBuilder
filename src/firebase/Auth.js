import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/slice';
import React, { useEffect, useRef } from 'react';

export async function signUp(email, password) {
    const auth = getAuth()
    let user = null
    console.log(email, password)
    try {
        user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
    } catch (error) {
        console.log(error)
        user = { 
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
    return user
}
export async function signIn(email, password) {
    const auth = getAuth()
    let user = null
    try {
        user = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        user = { 
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
        return user
    }
}
export function getCurrentUser(dispatch) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {   
            dispatch(setUser({
                isLoggedIn: true,
                user: {
                    accessToken: user.accessToken,
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    isAnonymous: user.isAnonymous,
                    displayName: user.displayName
                }
            }))         
            return user
        } else {
            dispatch(setUser({
                isLoggedIn: false,
                user: null
            }))
            return false
        }
    })
}
export async function signOutUser(dispatch) {
    const auth = getAuth();
    try {
        const msg = await signOut(auth)
        getCurrentUser(dispatch)
        return msg
    } catch( error ) {
        return error;
    }
}
function Auth() {
    const dispatch = useDispatch()
    getCurrentUser(dispatch)    
}

export default Auth;