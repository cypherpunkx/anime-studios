import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

function Detail({ anime }) {
    const { animeImg, animeTitle, type, releasedDate, status, genres, otherNames, synopsis, totalEpisodes, episodesList } = anime
    const [listItem, setListItem] = useState(20)

    const loadMore = useCallback(() => {
        setListItem(prevListItem => prevListItem + 10)
        return
    }, [listItem])

    console.log(episodesList?.length)

    return (
        <>
            <div className='flex flex-col lg:flex-row mx-4 sm:mx-0 gap-6 bg-'>
                <picture className='shrink-0'>
                    <img src={animeImg} alt={animeTitle} className='w-full h-full aspect-auto object-cover rounded' />
                </picture>
                <article className='space-y-6 p-6 sm:p-12'>
                    <div className='flex gap-2'>
                        <span>Title</span>
                        <p className='text-yellow-400'>: {animeTitle}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Status</span>
                        <p className='text-yellow-400'>: {status}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Other Names</span>
                        <p className='text-yellow-400'>: {otherNames}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Released Date</span>
                        <p className='text-yellow-400'>: {releasedDate}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Type</span>
                        <p className='text-yellow-400'>: {type}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Genres</span>
                        <p className='text-yellow-400'>: {genres?.join(", ")}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Total Episodes</span>
                        <p className='text-yellow-400'>: {totalEpisodes}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span>Synopsis</span>
                        <p className='text-yellow-400'>: {synopsis}</p>
                    </div>
                </article>
            </div>

            <div className='my-8 mx-4 sm:mx-0'>
                <Link to='/'>
                    <button className='bg-yellow-400 text-black py-2 px-4 rounded'>Back to animes</button>
                </Link>
            </div>

            <section className='my-8'>
                <h1 className='text-center text-2xl mb-6 text-yellow-400 tracking-widest uppercase'>Episodes</h1>
                <ul className='grid grid-cols-5 gap-4 place-content-center'>
                    {episodesList?.slice(0, listItem).map((list, i) => {
                        const { episodeId, episodeNum, episodeUrl } = list
                        return <li key={i}>
                            <a href={episodeUrl} target="_blank" className='block text-center text-white hover:bg-blue-400 hover:text-black py-1 rounded transition-colors 1s ease-linear'>Episode {episodeNum}</a>
                        </li>
                    }
                    )}
                </ul>
                <footer className='flex justify-center mt-6'>
                    {episodesList?.length > 20 && listItem < episodesList?.length && (
                        <button onClick={loadMore} className='bg-blue-400 text-black py-2 px-4 rounded'>Load More</button>
                    )}
                </footer>
            </section>
        </>
    )
}

export default Detail