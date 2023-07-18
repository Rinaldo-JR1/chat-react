import React from 'react'
import { Navbar } from './navbar'
import { Chat } from './chat'
import { Search } from './search'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chat />
        </div>
    )
}
