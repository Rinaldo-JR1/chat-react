import React from 'react'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Ultra chat</span>
            <span className='user'>
                <img src="https://images.pexels.com/photos/17440874/pexels-photo-17440874/free-photo-of-black-and-white-fashion-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>John</span>
                <button>Sair</button>
            </span>

        </div>
    )
}
