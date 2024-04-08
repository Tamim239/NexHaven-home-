import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../Firebase/Firebase"


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)



const createUser =(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginUser = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin = () =>{
   return signInWithPopup(auth, googleProvider)
}
const githubLogin = () =>{
   return signInWithPopup(auth, githubProvider)
}


    const authInfo = {
   user,
   createUser,
  loginUser,
  googleLogin,
  githubLogin,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
