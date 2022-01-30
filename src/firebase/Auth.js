import './init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/slice';
import React from 'react';

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
    } catch (error) {
        user = { 
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}
export function getCurrentUser(dispatch) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log('User', user)
        if(user) {   
            dispatch(setUser({
                isLoggedIn: true,
                user: user
            }))         
            return user.id;
        } else {
            return false
        }
    })
}
function Auth() {
    const dispatch = useDispatch()
    getCurrentUser(dispatch)
}

export default Auth;