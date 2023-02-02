import React from 'react'
import { Anime } from '../../components'
import useRecentAnimes from '../../hooks/useRecentAnime'

function RecentAnime() {
    const { recents, isLoading } = useRecentAnimes()

    if (isLoading) return (
        <h1 className='text-center'>Loading...</h1>
    )

    return (
        <div className='space-y-4 p-3 text-center sm:border-b-2 border-white/40'>
            <span className='uppercase tracking-widest'>new Releases</span>
            <div className='flex flex-row sm:flex-col space-y-4 items-center'>
                {recents.slice(0, 5).map((article, i) => (
                    <Anime article={article} key={i} />
                ))}
            </div>
        </div>
    )
}

export default RecentAnime