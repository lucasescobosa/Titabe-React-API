import { createContext, useState } from "react";

const UserContext = createContext('');

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        email: "", 
        id: 0, 
        logged: false 
      })
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext