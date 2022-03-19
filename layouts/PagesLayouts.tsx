import React from 'react'
import Navbar from '@/components/moleculs/Navbar'

const PagesLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="max-w-pages">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default PagesLayouts