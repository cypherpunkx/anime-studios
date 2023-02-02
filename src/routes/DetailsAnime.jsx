import React from 'react'
import { useParams } from 'react-router-dom'
import { Detail, Loader } from '../components'
import useDetailsAnime from '../hooks/useDetailsAnime'

function DetailsAnime() {
    const { id } = useParams();
    const { anime, isLoading } = useDetailsAnime(id)

    if (isLoading) return <Loader />

    return (
        <Detail anime={anime} />
    )
}

export default DetailsAnime