import { getFirestore, getDocs, collection, getDoc, doc } from "firebase/firestore"

export function GetAllTemplates(callback) {
    const db = getFirestore()
    let templates = []
    getDocs(collection(db, "Templates")).then(docs => {
        docs.forEach(doc => {
            templates.push({
                ...doc.data(),
                id: doc.id
            })
        })
        callback(templates, null)
    }).catch(e => {
        callback(null, templates)
    })
}
export function GetTemplateData(name, callback) {
    
    const db = getFirestore()
    getDoc(doc(db, "Templates", name)).then(doc => {      
        if(doc.exists()) {
            callback(doc.data(), null)
        } else {
            callback(null, "No data found")
        }
    }).catch(e => {
        callback(null, e)
    })
}