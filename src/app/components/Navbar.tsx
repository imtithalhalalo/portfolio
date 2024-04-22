'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: 'About',
        href: '#about'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 mt-4'>
                <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'>I <span className='text-[#03b9f4]'>H</span></Link>
                <div className="mobile-menu block md:hidden mt-4">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='text-slate-100 flex items-center px-3 py-2 border border-slate-50 rounded hover:text-white'>
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='text-slate-100 flex items-center px-3 py-2 border border-slate-50 rounded hover:text-white'>
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto"  id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                        {
                            navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title}/>
                            </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
            {
                !navbarOpen ? (<MenuOverlay links={navLinks} />) : <></>
            }
        </nav>
   )
}

export default Navbar