import { cn } from '../lib/utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, TreePine, Coffee } from 'lucide-react'


const navLinks = [
    {
        name: 'Home',
        href: '#hero'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Work',
        href: '#work'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false) 
    const [isDarkMode, setIsDarkMode] = useState(false)
 
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Theme toggle logic
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

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    // Add data attribute to body to indicate mobile nav state
    useEffect(() => {
        document.body.setAttribute('data-mobile-nav-open', isMenuOpen.toString())
    }, [isMenuOpen])

    return (
        <nav className = {cn("fixed w-full z-40 bg-background/80 backdrop-blur-sm ", 
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" : "py-5")}
        > 
             <div className = "container flex items-center justify-between">

                <a className = "text-2xl font-bold text-primary flex items-center gap-2" href = "#hero"> 
                    <span className = "relative z-10 "> 
                        <span className = "text-glow text-foreground"> Sohum </span> Trivedi
                    </span> 
                </a>

                {/* desktop nav */}
                <div className = "hidden md:flex items-center space-x-8"> 
                    {navLinks.map((item, key) => (
                        <a key = {key} href = {item.href} className = "text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    
                    {/* Theme toggle button */}
                    <button 
                        onClick={toggleTheme} 
                        className="p-3 rounded-full transition-all duration-300 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <TreePine className='w-5 h-5 text-primary' /> : <Coffee className='w-5 h-5 text-primary' />}
                    </button>
                </div>

                
                <button onClick = {() => setIsMenuOpen((prev) => !prev)} 
                className = "md:hidden p-2 z-50 rounded-full transition-colors duration-300 "> 
                    {isMenuOpen ? <X size={24} className = "text-foreground" /> : <Menu size={24} className = "text-foreground" /> }
                </button>

                {/* mobile nav */}
                <div className = {cn("fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden", 
                    "transition-all duration-300",
                    isMenuOpen ? " pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>
                    <div className = "h-screen flex flex-col items-center justify-center">
                        <div className = "flex flex-col space-y-8 text-xl items-center"> 
                            {navLinks.map((item, key) => (
                                <a key = {key} href = {item.href} onClick={handleLinkClick} className = "text-foreground hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </a>  
                            ))}
                            
                            {/* Theme toggle button for mobile */}
                            <button 
                                onClick={toggleTheme} 
                                className="p-4 rounded-full transition-all duration-300 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 mt-4"
                                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDarkMode ? <TreePine className='w-6 h-6 text-primary' /> : <Coffee className='w-6 h-6 text-primary' />}
                            </button>
                        </div>
                    </div>
                </div>


             </div>
        </nav>
    )
}
