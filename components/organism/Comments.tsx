import React from 'react'
import { FaThumbsUp, FaThumbsDown, FaArrowDown, FaArrowUp } from "react-icons/fa"
import { ICommentsList } from '@/interfaces/ICommentsList'

const Comments = ({ id, images, author, date, message, increment, decrement, point, replyAuthor, replyDate, replyMessage, replyPoint }: ICommentsList) => {
    return (
        <React.Fragment>
            <div key={id} className="comment-card">
                {/* Users Avatar */}
                <div><img className='avatar' src={images} alt={''} /></div>
                {/* Users Information */}
                <div>
                    <h1 className='author text-dark-brown'>{author}</h1>
                    {/* <h4 className='avatar'>{itemsComment.avatar}</h4> */}
                    <h4 className='date text-dark'>{date}</h4>
                    <h4 className='message text-dark'>{message}</h4>
                    {/* Like and Dislike Action */}
                    <div className='action flex' style={{ marginTop: "12px", border: "none" }}>
                        <h3 className='likecount text-dark'>{point} Points</h3>
                        <button onClick={increment} className='like'><FaArrowUp size={14} /></button>
                        <button onClick={decrement} className='dislike'><FaArrowDown size={14} /></button>
                    </div>


                    {/* Users Information */}
                    <div className='replies'>
                        <div><img className='avatar' src={images} alt={''} /></div>
                        <div>
                            <h1 className='author text-dark-brown'>Ferdian</h1>
                            {/* <h4 className='avatar'>{itemsComment.avatar}</h4> */}
                            <h4 className='date text-dark'>22 Desember 2022</h4>
                            <h4 className='message text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. repellendus, corrupti doloribus tempore repellendus, corrupti doloribus tempore.</h4>
                            {/* Like and Dislike Action */}
                            <div className='action flex' style={{ marginTop: "12px", border: "none" }}>
                                <h3 className='likecount text-dark'>{point} Points</h3>
                                <button onClick={increment} className='like'><FaArrowUp size={14} /></button>
                                <button onClick={decrement} className='dislike'><FaArrowDown size={14} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Comments