import React from 'react'
import Img from '../imgs/img.png'
import Attach from '../imgs/attach.png'
export const Input = () => {
    return (
        <div className="input">
            <input type="text" id='message' placeholder='Sua mensagem' />
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{ display: 'none' }} id='file' />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
            </div>
        </div>
    )
}
