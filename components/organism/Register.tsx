import React, { SyntheticEvent, useState } from 'react'

const Register = ({ setClose }: any) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [notification, setNotification] = useState("")
    const [empty, setEmpty] = useState("")

    const postData = (event: SyntheticEvent) => {
        event.preventDefault()

        const EmailValidation = (email: string) => {
            const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (validation.test(email)) {
                return true
            } else {
                return false
            }
        }

        const EmptyValidation = (email: string, password: string, name: string) => {
            if (email || password || name == "") {
                return false
            } else {
                return true
            }
        }

        if (EmailValidation(email) == true) {
            if (EmptyValidation(email, password, name) == true) {
                const data = JSON.stringify({
                    message: "Success, Email is Valid",
                    email
                })
                alert(data)
                setNotification("")
            } else {
                setEmpty("Field input tidak boleh kosong")
            }
        } else {
            setNotification("Format Email Salah")
            setEmpty("Field input tidak boleh kosong")
        }
    }

    const ResetFields = () => {
        setName("")
        setEmail("")
        setPassword("")
        setNotification("")
        setEmpty("")
    }
    return (
        <React.Fragment>
            <form onSubmit={postData} className='formsRegister' action="">
                <div onClick={setClose} className="bg-red close">X</div>
                <h1 className='heading-2 text-dark-brown'>Register</h1>
                <div className="form-group-register">
                    <label className='font-medium text-dark-brown' htmlFor="name">Name</label>
                    <input className='input2' onChange={event => setName(event.target.value)} value={name} type="text" name="name" id="name" placeholder='Masukkan Nama' />
                    <p className='font-normal description-2 text-red error'>{empty}</p>
                </div>
                <div className="form-group-register">
                    <label className='font-medium text-dark-brown' htmlFor="login">Email</label>
                    <input className='input2' onChange={event => setEmail(event.target.value)} value={email} type="email" name="email" id="email" placeholder='Masukkan Email' />
                    <p className='font-normal description-2 text-red error'>{notification}</p>
                </div>
                <div className="form-group-register">
                    <label className='font-medium text-dark-brown' htmlFor="login">Password</label>
                    <input className='input2' onChange={event => setPassword(event.target.value)} value={password} type="password" name="password" id="password" placeholder='Masukkan Password' />
                    <p className='font-normal description-2 text-red error'>{empty}</p>
                </div>
                <button onClick={ResetFields} className="gray text-dark-brown button">Reset</button>
                <button className="register button">Create account</button>
            </form>
        </React.Fragment>
    )
}

export default Register