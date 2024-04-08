import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../Firebase/Firebase"


export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)




const createUser =(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}




    const authInfo = {
   user,
   createUser,

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
