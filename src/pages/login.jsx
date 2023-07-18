import React, { useState, } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { auth, storage, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        //TODO TROCAR A LOGICA DO CARA DO VIDEO
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            debugger
            console.dir(error)
            setErr(true)
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ultra chat</span>
                <span className="title">Crie sua conta</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                    {err && <span>Algo deu errado</span>}

                </form>
                <p>Não tem uma conta?<Link to='/register'>Clique aqui</Link></p>
            </div>
        </div>
    )
}
export default Login;