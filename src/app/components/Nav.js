import React from 'react'
import "../styles/navbar.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <>
        <nav className='navbar'>
        <ul className='navbarList'>
            <li className='navbarItem'>
                <Link href="/" className='navbarLink'>
                    Home
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/about" className='navbarLink'>
                    About
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/movie" className='navbarLink'>
                    Movies
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/contact" className='navbarLink'>
                    Contact
                </Link>
            </li>
        </ul>
        </nav>
    </>
  )
}

export default Nav