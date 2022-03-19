import { NextPage } from 'next'
import React from 'react'

const CategoryList: NextPage = () => {
    return (
        <React.Fragment>
            <main className='w-full bg-dark-brown dropdown'>
                <h3 className='text-white'>Linux</h3>
                <h3 className='text-white'>Windows</h3>
                <h3 className='text-white'>MAC OS</h3>
                <h3 className='text-white'>Android</h3>
                <h3 className='text-white'>iOS</h3>
            </main>
        </React.Fragment>
    )
}

export default CategoryList