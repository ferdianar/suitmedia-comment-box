import Link from 'next/link'
import React, { useState } from 'react'
import { FaCross, FaHamburger } from 'react-icons/fa'
import CategoryList from '../organism/CategoryList'
import Login from '../organism/Login'
import Register from '../organism/Register'

const SidebarMobile = ({ closeSidebar, openLogin, openRegister }: any) => {
    return (
        <aside className='aside w-full bg-dark-brown'>
            <div onClick={closeSidebar} className=""><FaHamburger size={32} color={'#EEE'} style={{ marginBottom: "12px" }} /></div>
            <input className='mobile-search-bar font-normal' type="search" name="cari" id="cari" placeholder='Search' />
            <div className="categories">
                <h3 className='text-white'>Categories</h3>
                <h3 className='text-white pl-link'>Linux</h3>
                <h3 className='text-white pl-link'>Windows</h3>
                <h3 className='text-white pl-link'>MAC OS</h3>
                <h3 className='text-white pl-link'>Android</h3>
                <h3 className='text-white pl-link'>iOS</h3>
            </div>
            <h3 onClick={openLogin} className='text-white'>Login</h3>
            <h3 onClick={openRegister} className='text-white'>Register</h3>
        </aside>
    )
}

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [sidebarMobile, setSidebarMobile] = useState(false)

    const ToggleSidebar = () => {
        setSidebarMobile(!sidebarMobile)
    }

    const opensLogin = () => setShowLogin(true)
    const opensRegister = () => setShowRegister(true)

    const ToggleLogin = () => {
        setShowLogin(!showLogin)
    }

    const ToggleRegister = () => {
        setShowRegister(!showRegister)
    }

    const closemodal = () => {
        setShowLogin(false)
    }

    const closeRegister = () => {
        setShowRegister(false)
    }

    const ToggleCategory = () => {
        setShowCategory(!showCategory)
    }

    const closeSidebar = () => setSidebarMobile(false)

    return (
        <React.Fragment>
            <nav className="navbar flex items-center justify-between px-content">
                <Link href={'/'}><a className='heading font-medium heading-3'>Forum anak IT</a></Link>
                <input className='search-bar font-normal' type="search" name="cari" id="cari" placeholder='Search' />
                <h3 onClick={ToggleCategory} className="description-1 font-medium">Categories</h3>
                <h3 onClick={ToggleLogin} className="description-1 font-medium">Login</h3>
                <h3 onClick={ToggleRegister} className="description-1 font-medium">Register</h3>
            </nav>
            <nav className="navbar-mobile flex items-center justify-between px-content">
                <Link href={'/'}><a className='heading font-medium heading-3'>Forum anak IT</a></Link>
                <FaHamburger size={24} className="hamburger" onClick={ToggleSidebar} />
            </nav>
            {
                sidebarMobile ? <SidebarMobile openLogin={opensLogin} openRegister={opensRegister} closeSidebar={closeSidebar} /> : ""
            }
            {
                showCategory ? <CategoryList /> : ""
            }
            {
                showLogin ? <Login setClose={closemodal} /> : ""
            }
            {
                showRegister ? <Register setClose={closeRegister} /> : ""
            }
        </React.Fragment>
    )
}

export default Navbar