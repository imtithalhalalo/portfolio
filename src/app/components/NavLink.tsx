import Link from 'next/link'
import React from 'react'

interface INavLink {
    href: string,
    title: string
}
const NavLink = ({ href, title}: INavLink) => {
  return (
    <Link 
        href={href} 
        className='block py-2 pl-3 text-[#fff] sm-text-xl rounded-md md:p-2 hover:text-[#281740] p-4 hover:bg-[#ffffffa5]'>
        {title}
    </Link>
  )
}

export default NavLink