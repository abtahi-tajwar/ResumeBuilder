import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser, setLoginStatus } from '../redux/auth/slice';
import React, { useEffect, useRef } from 'react';

export async function signUp(email, password) {
    const auth = getAuth()
    let user = null
    console.log(email, password)
    try {
        user = await createUserWithEmailAndPassword(auth, email, password)
        sendUserVerficationEmail()
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
export async function sendUserVerficationEmail() {
    const auth = getAuth()
    const confirmation = await sendEmailVerification(auth.currentUser)
    return confirmation
}
export async function signInWithGoogle() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user

        return { user, token }
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return { errorCode, errorMessage, email, credential }
    }
}
export function getCurrentUser(dispatch) {
    /* 
        -> Not logged in: -1
        -> Logged in, email not verified: 0
        -> Logged in, email verified: 1
    */
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {   
            if(user.emailVerified) {
                dispatch(setUser({
                    isLoggedIn: true,
                    loginStatus: 1,
                    user: {
                        accessToken: user.accessToken,
                        uid: user.uid,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        isAnonymous: user.isAnonymous,
                        displayName: user.displayName
                    }
                }))         
            } else {
                dispatch(setUser({
                    isLoggedIn: true,
                    loginStatus: 0,
                    user: {
                        accessToken: user.accessToken,
                        uid: user.uid,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        isAnonymous: user.isAnonymous,
                        displayName: user.displayName
                    }
                }))  
            }
            return user
        } else {
            dispatch(setUser({
                isLoggedIn: false,
                loginStatus: -1,
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