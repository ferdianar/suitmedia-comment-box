import { ITopicsInterface } from '@/interfaces/ITopicList'
import Link from 'next/link'
import React from 'react'

const TopicsComponent = ({ id, title, slug }: ITopicsInterface) => {
    const kebabCase = (slug: string): string => {
        const conversion = slug.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase()
        return conversion
    }
    return (
        <React.Fragment>
            <div className="topicList">
                <p className='text-white font-bold listnumber'>{id}</p>
                <Link href={`posts/${kebabCase(`${slug}`)}`}>
                    <a className='text-dark description-2 text-y-padding leading-3'>{title}</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default TopicsComponent