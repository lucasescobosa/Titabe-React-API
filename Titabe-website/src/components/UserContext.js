import { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext('');

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        fullName: "", 
        id: 0, 
        logged: false 
    })
    axios.get('http://localhost:3001/api/users/login', { headers: {accessToken: localStorage.getItem('accessToken')}})
    .then((response => {
        if(!response.data.error){
            setCurrentUser({
                email: response.data.email,
                fullName: response.data.fullName,
                id: response.data.id,
                logged: true
            })
        }
    }))
    .catch((e)=>console.log(e))
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext