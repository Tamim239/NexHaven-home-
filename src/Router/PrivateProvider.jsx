import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { InfinitySpin } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';


export const PrivateProvider = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

if(loading){
    return  <div className="flex justify-center h-96 items-center"><InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        /></div>
}

if(user){
    return children
}
  return <Navigate to="/login" state={location?.pathname}></Navigate>
}

PrivateProvider.propTypes ={
    children: PropTypes.node
}