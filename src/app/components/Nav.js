'use client'
import React, { useState } from 'react'
import "../styles/navbar.css"
import Link from 'next/link'
import {CgCloseR, CgMenu} from "react-icons/cg"

const Nav = () => {

    const [openMenu,setOpenMenu]=useState(false);
  return (
    <>
        <nav className='navbar'>
        <div className={openMenu?"active":""}>
        <ul className='navbarList'>
            <li className='navbarItem'>
                <Link href="/" className='navbarLink' onClick={()=>setOpenMenu(false)}>
                    Home
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/about" className='navbarLink' onClick={()=>setOpenMenu(false)}>
                    About
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/movie" className='navbarLink' onClick={()=>setOpenMenu(false)}>
                    Movies
                </Link>
            </li>


            <li className='navbarItem'>
                <Link href="/contact" className='navbarLink' onClick={()=>setOpenMenu(false)}>
                    Contact
                </Link>
            </li>
        </ul>
        {/* for menu button */}
        <div className="mobile-navbar-btn">
            <CgMenu
                name="menu-outline"
                className='mobile-nav-icon'
                onClick={()=>setOpenMenu(true)}
            />
            <CgCloseR
                name="close-outline"
                className='mobile-nav-icon close-outline'
                onClick={()=>setOpenMenu(false)}
            />
        </div>
        </div>
        </nav>
    </>
  )
}

export default Nav