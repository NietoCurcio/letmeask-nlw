import { useEffect, useState } from 'react'
import { createContext, ReactNode } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextProviderProps = {
  children: ReactNode
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [currentTheme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme')
    return (storedTheme ?? 'light') as Theme
  })

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
