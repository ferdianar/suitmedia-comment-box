import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar flex items-center justify-between px-content">
                <Link href={'/'}><a className='heading font-medium heading-3'>Forum anak IT</a></Link>
                <input className='search-bar font-normal' type="search" name="cari" id="cari" placeholder='Search' />
                <h3 className="description-1 font-medium">Categories</h3>
                <h3 className="description-1 font-medium">Login</h3>
                <h3 className="description-1 font-medium">Register</h3>
            </nav>
        </React.Fragment>
    )
}

export default Navbar