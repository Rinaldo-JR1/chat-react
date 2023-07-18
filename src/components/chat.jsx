import React from 'react'
import { Messages } from './messages'
import { Input } from './input'
import Cam from '../imgs/cam.png'
import Add from '../imgs/add.png'
import More from '../imgs/more.png'
export const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Cam} />
                    <img src={Add} />
                    <img src={More} />
                </div>

            </div>
            <Messages />
            <Input />
        </div>
    )
}
