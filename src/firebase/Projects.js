import React, { useRef, useEffect } from 'react';
import './init'
import { useSelector } from 'react-redux';
import { getFirestore, doc, getDoc, collection, setDoc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
export function TestProjectData(setData) {
    const renderCount = useRef(0)    
    const userState = useSelector(state => state.userState)

    if(renderCount.current < 1) {        
        const db = getFirestore()    
        const docRef = doc(db, "Projects", "8oQTk8hHYlbdlrw8pZ1A")
        const collectionRef = collection(db, "Projects", "8oQTk8hHYlbdlrw8pZ1A", "user_projects")
        addDoc(collectionRef, {
            template: "Elfin",
            cvInfo: "CV INFO"
        }).then(() => {
            console.log("Document Added to subcollection")
        }).catch(e => {
            console.log(e)
        })
        console.log(collectionRef)
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
export function GetProjectData(user, id, callback) {
    const db = getFirestore()
    getDoc(doc(db, "Projects", user.uid, "user_projects", id)).then(doc => {        
        if(doc.exists()) {
            console.log(doc.data())
            callback(doc.data(), null)
        } else {
            callback(false)
        }
    })
}
export function GetAllProjects(user, callback) {
    const db = getFirestore()
    if(!user) {
        console.log("Please login first")
        return
    }
    let projects = []
    getDocs(collection(db, "Projects", user.uid, "user_projects")).then(docs => {
        docs.forEach(doc => {
            projects.push({
                ...doc.data(),
                id: doc.id
            })
        })
        callback(projects)
    })
    
}
export function SetProjectData(user, theme, cvInfo, projectName, docId=null, callback) {
    const db = getFirestore()    
    const collectionRef = collection(db, "Projects", user.uid, "user_projects")
    let docRef = null
    cvInfo = {
        ...cvInfo,
        avatar: '../../empty.jpg'
    }
    console.log({
        theme: theme,
        projectName: projectName,
        cvInfo: JSON.stringify(cvInfo)
    })
    if(!docId) {
        addDoc(collectionRef, {
            theme: theme,
            projectName: projectName,
            cvInfo: JSON.stringify(cvInfo)
        }).then(docRef => { 
            callback(docRef)
        })
    } else {
        docRef = updateDoc(doc(collectionRef, docId), {
            theme: theme,
            projectName: projectName,
            cvInfo: JSON.stringify(cvInfo)
        }).then(docRef => {
            callback(docRef)
        })
    }

    return docRef
}

export function DeleteProjectData(user, docId, callback) {
    const db = getFirestore()  
    deleteDoc(doc(db, "Projects", user.uid, "user_projects", docId)).then(result => {
        callback(result, null)
    }).catch(e => {
        callback(null,e)
    })
}