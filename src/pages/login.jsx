import React from "react"

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ultra chat</span>
                <span className="title">Crie sua conta</span>
                <form>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                </form>
                <p>Não tem uma conta? Clique aqui</p>
            </div>
        </div>
    )
}
export default Login;