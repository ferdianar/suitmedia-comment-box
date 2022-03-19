import React from 'react'
import Navbar from '@/components/moleculs/Navbar'

const PagesLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    )
}

export default PagesLayouts