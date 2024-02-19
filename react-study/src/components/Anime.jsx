import React from 'react'
import Card from './card'

function Anime({anime}) {
  return (
    <>
    {anime !== null ? anime.data.map((data) => (
        <Card key={data.mal_id} data={data} />
    )) : <><h1>No Data</h1></>}
    </>
  )
}

export default Anime