import React from 'react';
import { signOutUser } from '../../firebase/Auth';
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';

function SignOut() {
    const dispatch = useDispatch()
    signOutUser(dispatch);
    return (<Navigate to="/authentication" />)
}

export default SignOut;
