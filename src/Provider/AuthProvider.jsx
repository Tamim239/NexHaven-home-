import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/Firebase"


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



const createUser =(email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginUser = (email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}
const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}
const googleLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
}
const githubLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, githubProvider)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
     
    })
return ()=>{
    unsubscribe()
}

}, [])




    const authInfo = {
   user,
   createUser,
  loginUser,
  googleLogin,
  githubLogin,
  loading,
  logOut,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
