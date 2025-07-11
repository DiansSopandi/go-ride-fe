'use client';

import { Menu,Moon,Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState(false)

    const toggleDarkMode = () => {
        setDark(!dark)
        document.documentElement.classList.toggle('dark')
      }    

    return(
        <header className="w-full py-4 bg-white dark:bg-background shadow-sm sticky top-0 z-50 rounded-lg">
            <div className="w-full mx-auto px-4 flex justify-between item-center">
                <a href="http://localhost:3000"> <h1 className="text-2xl font-bold text-primary">GORide</h1></a>
                <nav className="hidden md:flex items-center space-x-4">
                    <a href="#features" className="text-sm text-muted-foreground hover:text-green-700">Features</a>
                    <a href="#testimonials" className="text-sm text-muted-foreground hover:text-green-600">Testimoni</a>
                    <a href="#newsletter" className="text-sm text-muted-foreground hover:text-green-600">Newsletter</a>
                    <a href="/auth/login" className="text-sm text-primary font-medium hover:text-green-700">Login</a>
                    <a href="/auth/register" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:text-white/90 dark:text-primary-500" >Register</a>
                    <button onClick={toggleDarkMode} className="ml-2 text-muted-foreground">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <button onClick={toggleDarkMode} className="text-muted-foreground">{dark ? <Sun size={20} /> : <Moon size={20} />}</button>
                    <button onClick={() => setOpen(!open)} className="text-green-600">
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>                
            </div>

            {open && (
                <div className="md:hidden bg-white dark:bg-background border-t px-4 py-2 space-y-2">
                <a href="#features" className="block text-sm text-muted-foreground hover:text-green-600">Features</a>
                <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-green-600">Testimoni</a>
                <a href="#newsletter" className="block text-sm text-muted-foreground hover:text-green-600">Newsletter</a>
                <a href="/auth/login" className="block text-sm text-primary hover:text-red-600 sm:hover:text-red-600 active:text-red-600 focus:text-red-600">Login</a>
                <a href="/auth/register" className="block text-sm font-medium bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register</a>
                </div>
            )}            
        </header>
    )
}