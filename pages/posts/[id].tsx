import Navbar from '@/components/moleculs/Navbar'
import PostsLayouts from 'layouts/PostsLayouts'
import React, { SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
import $ from "jquery"

const PostDetails = () => {
    return (
        <React.Fragment>
            <PostsLayouts>
                <header className="headline">
                    <h1 className='heading text-dark-brown'>Post Details</h1>
                    <p className="text-dark description-2 text-y-padding leading-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam similique exercitationem optio atque!</p>
                </header>
            </PostsLayouts>
        </React.Fragment>
    )
}

export default PostDetails