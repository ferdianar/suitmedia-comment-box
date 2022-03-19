import Navbar from 'components/moleculs/Navbar'
import React, { SetStateAction, useEffect, useState } from 'react'
import $ from "jquery"
import Comments from '@/components/organism/Comments'
import { ICommentsList } from '@/interfaces/ICommentsList'
import { NextPage } from 'next'
import { TopicList } from '../apis'
import TopicsComponent from '@/components/moleculs/TopicsComponent'
import { ITopicsInterface } from '@/interfaces/ITopicList'
import PagesLayouts from 'layouts/PagesLayouts'
import { stringify } from 'querystring'
import SecondaryButton from '@/components/atoms/SecondaryButton'

const Home: NextPage = () => {
  const [comments, setComments] = useState<ICommentsList[]>([])
  const [replies, setReplies] = useState([])
  const [count, setCount] = useState(22)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [newComment, setNewComment] = useState("")

  const postComment = { name, email, newComment }

  const ResetComment = () => {
    setName("")
    setEmail("")
    setNewComment("")
  }

  useEffect(() => {
    console.log("Use Effect")
    $.ajax({
      method: 'GET',
      url: "http://localhost:5500/comments"
    }).done(function (data) {
      if (console) {
        // console.log(data)
        setComments(data)
      }
    })

  }, [])

  // console.log(comments)

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <PagesLayouts>
        <main className="pages">
          {/* Header */}
          <section className='content'>
            <header className="headline">
              <h1 className='heading text-dark-brown'>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
              <p className="text-dark description-2 text-y-padding leading-3">Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</p>
            </header>
            <section className='title-comment flex items-center justify-between'>
              <h2 className='text-dark-brown'>Komentar</h2>
              <div className='line'></div>
            </section>

            {/* Comment List */}
            <main>
              <div className="comments">
                {
                  comments.map((itemsComment: ICommentsList) => (
                    <Comments
                      id={itemsComment.id}
                      author={itemsComment.author}
                      avatar={itemsComment.avatar}
                      date={itemsComment.date}
                      message={itemsComment.message}
                      images={itemsComment.images}
                      increment={""}
                      point={itemsComment.point}
                      decrement={""}
                    />
                  ))
                }
              </div>
            </main>

            {/* Add Comment Title */}
            <section className='flex items-center justify-between'>
              <h2>Tambahkan Komentar</h2>
              <div className='line2'></div>
            </section>

            {/* Form Comment */}
            <section className='form-comment'>
              <input type="text" name="nama" onChange={event => setName(event.target.value)} value={name} id="nama" placeholder="Nama" className='input' />
              <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} id="email" placeholder="Email" className='input' />
              <textarea name="newComment" value={newComment} onChange={event => setNewComment(event.target.value)} id="newComment" cols={60} rows={10} placeholder={'Komentar Anda'}></textarea>
              <div className='button-action'>
                <button onClick={() => ResetComment()} className="reset button">Reset</button>
                <button onClick={() => alert(JSON.stringify(postComment))} className="submit button">Submit</button>
              </div>
            </section>
          </section>

          {/* Sidebar Menu */}
          <div className="sidemenu">
            <h3 className='heading-4 text-dark-brown'>Diskusi 5 Teratas</h3>
            {
              TopicList.map((topic) => (
                <TopicsComponent id={topic.id} title={topic.title} slug={topic.title} />
              ))
            }
          </div>
        </main>
      </PagesLayouts>
    </React.Fragment>
  )
}

export default Home