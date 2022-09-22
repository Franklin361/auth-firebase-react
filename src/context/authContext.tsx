import { createContext, useEffect, useState } from 'react'
import { loginWithCredentials, logoutFirebase, onAuthStateHasChanged, signInWithCredentials, singInWithGoogle } from '../firebase/providers'

export interface AuthStateContext {
    userId: string | null
    status: 'checking' | 'authenticated' | 'no-authenticated'
    handleLoginWithGoogle: () => Promise<void>
    handleLoginWithCredentials: (password: string, email: string) => Promise<void>
    handleRegisterWithCredentials: (password: string, email: string) => Promise<void>
    handleLogOut: () => Promise<void>
}

const initialState: Pick<AuthStateContext, 'status' | 'userId'> = {
    userId: null,
    status: 'checking'
}

export const AuthContext = createContext({} as AuthStateContext)

interface IElement { children: JSX.Element | JSX.Element[] }

export const AuthProvider = ({ children }: IElement) => {

    const [session, setSession] = useState(initialState)

    useEffect(() => {
        onAuthStateHasChanged(setSession)
    }, [])


    const handleLogOut = async () => {
        logoutFirebase()
        setSession({ userId: null, status: 'no-authenticated' })
    }

    const validateAuth = (userId: string | undefined) => {
        if (userId) return setSession({ userId, status: 'authenticated' })
        handleLogOut()
    }

    const checking = () => setSession(prev => ({ ...prev, status: 'checking' }))

    const handleLoginWithGoogle = async () => {
        checking()
        const userId = await singInWithGoogle()
        validateAuth(userId)
    }

    const handleLoginWithCredentials = async (password: string, email: string) => {
        checking()
        const userId = await loginWithCredentials({ email, password })
        validateAuth(userId)
    }

    const handleRegisterWithCredentials = async (password: string, email: string) => {
        checking()
        const userId = await signInWithCredentials({ email, password })
        validateAuth(userId)
    }

    return (
        <AuthContext.Provider
            value={{
                ...session,
                handleLoginWithGoogle,
                handleLoginWithCredentials,
                handleRegisterWithCredentials,
                handleLogOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
