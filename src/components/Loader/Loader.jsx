import React from 'react'
import ball from '../../assets/loader.gif'

function Loader() {
    return (
        <div className='h-[50vh] flex justify-center items-center'>
            <figure>
                <img src={ball} alt="loading" width={150} height={150} />
            </figure>
        </div>
    )
}

export default Loader