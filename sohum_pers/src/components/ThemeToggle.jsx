import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '../lib/utils'

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        }
        else {
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        }
    }, [])


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add('dark') 
            localStorage.setItem('theme', 'dark') 
            setIsDarkMode(true)
        }
    }




    return (
        <div>
            <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-4 z-50 p-2 rounded-full transition-colors duration-300 ")}>
                {isDarkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5'  /> }
            </button>
        </div>
    )
}
