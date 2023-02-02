import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function Anime({ article }) {
    const { animeId, animeTitle, animeImg, releasedDate } = article

    return (
        <Link to={`animes/${animeId}`}>
            <Fade delay={350} cascade triggerOnce>
                <div className='space-y-2 hover:scale-105 transition 1s ease-in-out cursor-pointer'>
                    <picture>
                        <img src={animeImg} alt={animeTitle} className='aspect-square w-full max-h-full object-cover rounded' />
                    </picture>
                    <Fade delay={400} damping={1e-1} triggerOnce>
                        <div className='space-y-2'>
                            <span>{releasedDate}</span>
                            <p className='text-sm'>{animeTitle}</p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </Link>
    )
}

export default Anime