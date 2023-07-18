import React, { useState } from "react"
import Add from '../imgs/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import { useNavigate, Link } from 'react-router-dom'

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        //TODO TROCAR A LOGICA DO CARA DO VIDEO
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.dir(error)
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: name,
                            photoURL: downloadURL
                        })

                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            name: name,
                            email,
                            photoURL: downloadURL
                        }).catch((err) => {
                            console.dir(err)
                            setErr(true)
                        })
                        // await setDoc(doc(db, "userChats", res.user.uid), {})
                        navigate('/')
                    });
                }
            );
        } catch (error) {
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
                {err && <span>Algo deu errado</span>}
                <p>Já tem uma conta? Não tem uma conta?<Link to='/login'>Clique aqui</Link></p>
            </div>
        </div>
    )
}
export default Register;