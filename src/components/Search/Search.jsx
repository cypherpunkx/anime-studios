import React from 'react'

function Search({ setQuery }) {
    return (
        <input type="text" placeholder='Search...' className='w-full p-2 bg-transparent border-b-2 border-blue-500 outline-none' onChange={(e) => setQuery(e.target.value)} />
    )
}

export default Search