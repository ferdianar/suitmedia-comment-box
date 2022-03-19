import React from 'react'
import Navbar from '@/components/moleculs/Navbar'

const PostsLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <Navbar />
            <main className='posts'>
                {children}
            </main>
        </React.Fragment>
    )
}

export default PostsLayouts