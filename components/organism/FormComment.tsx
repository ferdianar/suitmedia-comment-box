import React, { SyntheticEvent, useState } from 'react'

const FormComment = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [newComment, setNewComment] = useState("")
    const [empty, setEmpty] = useState("")


    const postComment = { name, email, newComment }

    const ResetComment = () => {
        setName("")
        setEmail("")
        setNewComment("")
    }

    const data = JSON.stringify(postComment)

    const postData = (event: SyntheticEvent) => {
        event.preventDefault()

        const EmptyValidation = (email: string, newComment: string, name: string) => {
            if (email || newComment || name == "") {
                return false
            } else {
                return true
            }
        }

        if (EmptyValidation(email, newComment, name)) {
            return data
        } else {
            setEmpty("Fields tidak boleh kosong")
        }
    }

    return (
        <React.Fragment>
            {/* Form Comment */}
            <form onSubmit={postData} className='form-comment'>
                <input type="text" name="nama" onChange={event => setName(event.target.value)} value={name} id="nama" placeholder="Nama" className='input' />
                <p className='font-normal description-2 text-red error'>{empty}</p>

                <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} id="email" placeholder="Email" className='input' />
                <p className='font-normal description-2 text-red error'>{empty}</p>

                <textarea name="newComment" value={newComment} onChange={event => setNewComment(event.target.value)} id="newComment" cols={60} rows={10} placeholder={'Komentar Anda'}></textarea>
                <p className='font-normal description-2 text-red error'>{empty}</p>
                <div className='button-action'>
                    <button onClick={() => ResetComment()} className="reset button">Reset</button>
                    <button className="submit button">Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default FormComment