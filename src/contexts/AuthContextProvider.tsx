import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  // signInWithGoogle: Function seems to be working as well
  signInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL)
          throw new Error('Missing information from Google Account')

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    // clean event listener within useEffect
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const response = await auth.signInWithPopup(provider)
    if (response.user) {
      const { displayName, photoURL, uid } = response.user

      if (!displayName || !photoURL)
        throw new Error('Missing information from Google Account')

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
      localStorage.setItem('userId', uid)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
