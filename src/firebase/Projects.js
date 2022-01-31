import React, { useRef, useEffect } from 'react';
import './init'
import { useSelector } from 'react-redux';
import { getFirestore, doc, getDoc } from "firebase/firestore"
export function GetProjectData(setData) {
    const renderCount = useRef(0)    
    const userState = useSelector(state => state.userState)

    if(renderCount.current < 1) {        
        const db = getFirestore()    
        const docRef = doc(db, "Projects", "8oQTk8hHYlbdlrw8pZ1A")
        getDoc(docRef).then(docSnap => {
            if(docSnap.exists()) { 
                setData(docSnap.data())
                return
            }
            setData(false)
        })
    }   

    useEffect(() => {
        renderCount.current += 1
    })
}

