import {createContext, ReactElement, useState} from "react";
import jwt_decode from "jwt-decode";

interface AuthContextType {
    setJwt: (jwt: string) => void
    token?: string
    jwtDecoded?: {sub?: string}
}

const AuthContext = createContext<AuthContextType>({
    setJwt: (data) => {}
})

export {AuthContext}

export default function AuthProvider({children}: { children: ReactElement<any, any> }) {

    const [token, setToken] = useState<string>()
    const [jwtDecoded, setJwtDecoded] = useState<{}>()

    const setJwt = (jwt: string) => {
        setToken(jwt)
        setJwtDecoded(jwt_decode(jwt.toString()))
    }

    return (
        <AuthContext.Provider value={{token, jwtDecoded, setJwt}}>
            {children}
        </AuthContext.Provider>
    )
}

// export const AuthContext = createContext<AuthContextType>({
//     setJwt(): void {},
//     token: undefined,
//     jwtDecoded: undefined
// })
//
// export const AuthProvider = ({children}: { children: ReactElement }) => {
//     let token = undefined;
//     let jwtDecoded = undefined;
//
//     const setJwt = (jwt: string) => {
//         console.log(jwt)
//         token = jwt
//         jwtDecoded = jwt_decode(jwt.toString())
//     }
//     return (
//
//         <AuthContext.Provider value={{token, jwtDecoded, setJwt}}>
//             {children}
//         </AuthContext.Provider>
//     )
//}