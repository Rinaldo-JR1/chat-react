import React from 'react'

export const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" id="search" placeholder="Procurar" />
            </div>
            <div className='userChat'>
                <img src="https://images.pexels.com/photos/17440874/pexels-photo-17440874/free-photo-of-black-and-white-fashion-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="userChatInfo">
                    <span>John</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}
