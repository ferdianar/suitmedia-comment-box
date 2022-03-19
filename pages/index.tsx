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
import SecondaryButton from '@/components/atoms/SecondaryButton'
import FormComment from '@/components/organism/FormComment'
import Head from 'next/head'

const Home: NextPage = () => {
  const [comments, setComments] = useState<ICommentsList[]>([])
  const [replies, setReplies] = useState([])
  const [count, setCount] = useState(22)

  useEffect(() => {
    console.log("Side Effect Test")

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
      <Head>
        <title>Forum Anak IT - Homepage</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="forum anak it" />
        <meta name='author' content="ferdian" />
      </Head>
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
              <h2 className='text-dark-brown'>Tambahkan Komentar</h2>
              <div className='line2'></div>
            </section>
            <FormComment />
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