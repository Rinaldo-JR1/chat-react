import React from "react"
import Add from '../imgs/addAvatar.png'
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ultra chat</span>
                <span className="title">Crie sua conta</span>
                <form>
                    <input type="text" placeholder="Nome completo" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        Foto de perfil
                    </label>
                    <input style={{ display: "none" }} type="file" id="file" />
                    <button>Cadastrar</button>
                </form>
                <p>Já tem uma conta? Clique aqui</p>
            </div>
        </div>
    )
}
export default Register;