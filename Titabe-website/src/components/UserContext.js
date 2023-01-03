import { createContext } from "react";

const UserContext = createContext('');

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = setState({
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