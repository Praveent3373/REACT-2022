import { createContext, useState } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type AuthUser = {
    name: string,
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const ThemeContext = createContext({} as UserContextType);


export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
    const [user, setUser] = useState<null | AuthUser>(null);
    return <ThemeContext.Provider value={{user, setUser}}>{children}
    </ThemeContext.Provider>
}