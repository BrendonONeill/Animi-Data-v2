import { createContext, useState } from "react";



const MainContext = createContext()


export function UserContextProvider({children}) {
    const [user,setUser] = useState({name:"sam"})
return(
    <MainContext.Provider value={{user,setUser}}> 
        {children}
    </MainContext.Provider>
)
}

export default MainContext