import { createContext, useState, useEffect } from "react";
import axios from "axios";

let UserContext = createContext('');

export const UserContextProvider = ({children}) => {

    let [currentUser, setCurrentUser] = useState({
        email: "",
        fullName: "", 
        role_id: 3, 
        logged: false 
    })

    useEffect(()=>{

    axios.get('http://localhost:3001/api/users/login', { headers: {accessToken: localStorage.getItem('accessToken')}})
    .then((response => {
        if(!response.data.error){
            setCurrentUser({
                email: response.data.email,
                fullName: response.data.fullName,
                role_id: response.data.role_id,
                logged: true
            })
        }
    }))
    .catch((e)=>console.log(e))
    }, []);
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext