
 import firebaseInitialize from '../Firebaseinitializa/firebaseInitialize'
 import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState,updateProfile  ,signInWithEmailAndPassword } from 'react';
 
 const googleProvider = new GoogleAuthProvider();

 firebaseInitialize()
const useFirebase = () => {
const [user,setUser]=useState('')
const [error,setError]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [userName,setUserName]=useState('')
// all input event handler

const handleUserEmail=(e)=>{
setEmail(e.target.value)
}
const handelUserPassword=(e)=>{
    setPassword(e.target.value)
}
const handelUserName=(e)=>{
    setUserName(e.target.value)
}




const auth=getAuth()
const signInUsingGoolge=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user)
    })
    .catch(error=>{
        setError(error.message)
    })
}
 useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
    })
 },[])


 const createNewUser=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user);
        setError('')
        setNewUserName()
    })
    .catch(error=>{
        setError(error.code)
    })
 }

const setNewUserName=()=>{
    updateProfile(auth.currentUser, {
        displayName: {userName}
      })
      .then(() => {
        
      })

}


const login=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>{
        setError(error.code)
    })
}




const logOut=()=>{
    signOut(auth)
    .then(result=>{
        setUser({})
    })
}





    return {
        signInUsingGoolge,
        user,
        error,
        logOut,
        handelUserPassword,
        handleUserEmail,
        createNewUser,
        handelUserName,
        userName,
        login
    }
};

export default useFirebase;