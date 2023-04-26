import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/api";

type User = {
    id: string
	email: string
	name: string
	role: string
	avatar_url: string
	admin: boolean
	created_at: Date
}

interface AuthContextData {
    userInfo: User | null
    signOut: () => void
    signIn: (email: string, password: string) => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}
interface AuthResponse {
  access_token: string
  refresh_token: string
}

interface UserResponse {
	id: string
	email: string
	name: string
	role: string
	avatar_url: string
	admin: boolean
	created_at: Date
}

export function AuthProvider(props: AuthProvider) {

    const [userInfo, setUser] = useState<User | null>(null)


    const signIn = async (email: string, password: string) => {
        const response = await api.post<AuthResponse>('/auth/signin', {
            email,
            password
        })

        const { access_token } = response.data
        localStorage.setItem('@lj_register:token', access_token)

        api.defaults.headers.common.authorization = `Bearer ${access_token}`
        const userData = await api.get<UserResponse>('/user/me')
        const user = userData.data
        

        const userJSON = JSON.stringify(user)

        localStorage.setItem('@lj_register:user', userJSON)
        setUser(user)
        setTimeout(()=> {
            window.location.href = '/admin'
        }, 1000)
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lj_register:token')
        localStorage.removeItem('@lj_register:user')
        window.location.href = '/login'
    }

    useEffect(() => {
        const userStored = localStorage.getItem('@lj_register:user')

        if (userStored) {
            return setUser(JSON.parse(userStored))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, userInfo, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}