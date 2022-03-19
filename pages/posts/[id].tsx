import Navbar from '@/components/moleculs/Navbar'
import PostsLayouts from 'layouts/PostsLayouts'
import React from 'react'

const PostDetails = () => {
    return (
        <React.Fragment>
            <PostsLayouts>
                <header className="headline">
                    <h1 className='heading text-dark-brown'>Post Details</h1>
                    <p className="text-dark description-2 text-y-padding leading-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam similique exercitationem optio atque!</p>
                </header>
                <main>
                    <form className='forms' action="">
                        <h1 className='heading-2 text-dark-brown'>Login</h1>
                        <div className="form-group">
                            <label className='font-medium text-dark-brown' htmlFor="login">Email</label>
                            <input className='input2' type="text" name="email" id="email" placeholder='Masukkan Email' />
                        </div>
                        <div className="form-group">
                            <label className='font-medium text-dark-brown' htmlFor="login">Password</label>
                            <input className='input2' type="text" name="password" id="password" placeholder='Masukkan Password' />
                        </div>
                        <button className="login button">Login</button>
                    </form>
                </main>
            </PostsLayouts>
        </React.Fragment>
    )
}

export default PostDetails