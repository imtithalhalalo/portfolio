import React from 'react'
import NavLink from './NavLink';

interface IMenuOverlay {
    links: { title: string; href: string; }[]
}
const MenuOverlay = ({ links }: IMenuOverlay) => {
  return (
    <ul className='flex flex-col py-4 items-left bg-[#351f5376]'>
        {
            links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.href} title={link.title}/>
                </li>
            ))
        }
    </ul>
  )
}

export default MenuOverlay