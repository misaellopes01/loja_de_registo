import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/api";
import { isTokenExpired } from "../Router";
import { Navigate } from "react-router-dom";

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
    refreshSigIn: (refresh: string) => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}
interface AuthResponse {
  access_token: string
  refresh_token: string
}

export interface UserResponse {
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
        let response 
        try {
            response = await api.post<AuthResponse>('/auth/signin', {
                email,
                password
            })
        } catch (error) {
            window.alert('Email ou senha incorreta!')
        }

        const { access_token, refresh_token } = response!.data
        localStorage.setItem('@lj_register:token', access_token)
        localStorage.setItem('@lj_register:refresh_token', `eyJhotHserfer${refresh_token}`)

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
    const refreshSigIn = async (refresh: string) => {
        api.defaults.headers.common.authorization = `Bearer ${refresh}`
        const response = await api.post<AuthResponse>('/auth/refresh', {
            refresh
        })
        const { access_token, refresh_token } = response.data
        localStorage.setItem('@lj_register:token', access_token)
        localStorage.setItem('@lj_register:refresh_token', `eyJhotHserfer${refresh_token}`)

        api.defaults.headers.common.authorization = `Bearer ${access_token}`
        const userData = await api.get<UserResponse>('/user/me')
        const user = userData.data
        
        const userJSON = JSON.stringify(user)

        localStorage.setItem('@lj_register:user', userJSON)
        setUser(user)
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lj_register:token')
        localStorage.removeItem('@lj_register:refresh_token')
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
        <AuthContext.Provider value={{ signIn, userInfo, signOut, refreshSigIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}