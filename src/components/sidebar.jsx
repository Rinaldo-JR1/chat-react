import React from 'react'
import { Navbar } from './navbar'
import { Chats } from './chats'
import { Search } from './search'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}
