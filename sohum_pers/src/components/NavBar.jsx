import { cn } from '../lib/utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'


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
 
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

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
                <div className = "hidden md:flex space-x-8"> 
                    {navLinks.map((item, key) => (
                        <a key = {key} href = {item.href} className = "text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}

                    
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
                        <div className = "flex flex-col space-y-8 text-xl"> 
                            {navLinks.map((item, key) => (
                                <a key = {key} href = {item.href} onClick={handleLinkClick} className = "text-foreground hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </a>  
                            ))}
                        </div>
                    </div>
                </div>


             </div>
        </nav>
    )
}
