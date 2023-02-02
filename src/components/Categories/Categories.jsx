import React from 'react'
import classNames from 'classnames'

function Categories({ genre, handleActive }) {
    const active = genre.includes('/') && genre.split('/')[1]

    return (
        <div className='space-y-1 text-yellow-400'>
            <div className='hover:bg-yellow-400 hover:text-black transition rounded'>
                <button className={`uppercase w-full text-left p-2 rounded ${classNames({ 'bg-yellow-400': active === 'action', 'text-black': active === 'action' })}`} onClick={() => handleActive('genre/action')}>Action</button>
            </div>
            <div className='hover:bg-yellow-400 hover:text-black transition rounded'>
                <button className={`uppercase w-full text-left p-2 rounded ${classNames({ 'bg-yellow-400': active === 'adventure', 'text-black': active === 'adventure' })}`} onClick={() => handleActive('genre/adventure')}>Adventure</button>
            </div>
            <div className='hover:bg-yellow-400 hover:text-black transition rounded'>
                <button className={`uppercase w-full text-left p-2 rounded ${classNames({ 'bg-yellow-400': active === 'fantasy', 'text-black': active === 'fantasy' })}`} onClick={() => handleActive('genre/fantasy')}>Fantasy</button>
            </div>
        </div >
    )
}

export default Categories