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

export const AuthProvider = ({
    children
}: {
    children: JSX.Element | JSX.Element[]
}) => {

    const [session, setSession] = useState(initialState)


    useEffect(() => {
        onAuthStateHasChanged(setSession)
    }, [])

    const handleLoginWithGoogle = async () => {
        setSession(prev => ({ ...prev, status: 'checking' }))
        const userId = await singInWithGoogle()
        setAuth(userId)
    }

    const handleLoginWithCredentials = async (password: string, email: string) => {
        setSession(prev => ({ ...prev, status: 'checking' }))
        const userId = await loginWithCredentials({ email, password })
        setAuth(userId)
    }

    const handleRegisterWithCredentials = async (password: string, email: string) => {
        setSession(prev => ({ ...prev, status: 'checking' }))
        const userId = await signInWithCredentials({ email, password })
        setAuth(userId)
    }


    const setAuth = (userId: string | undefined) => {
        if (userId) return setSession({ userId, status: 'authenticated' })
        handleLogOut()
    }

    const handleLogOut = async () => {
        logoutFirebase()
        setSession({ userId: null, status: 'no-authenticated' })
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
