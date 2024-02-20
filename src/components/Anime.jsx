import React from 'react'
import Card from './card'

function Anime({anime}) {
  return (
    <>
    <div className='navbar-section'>

    </div>
    <div className='main-section'>
    {anime !== null ?
    <>
    <div className='card-grid'>
      {anime.data.map((data) => (
        <Card key={data.mal_id} data={data} />
    ))}
    </div>
    <div className='pagination-section'><button className='pagination-button'>0</button><p className='pagination-button pagination-main'>1</p><button className='pagination-button'>2</button></div>
    </>
    : <><h1>No Data</h1></>}
    </div>
    </>
  )
}

export default Anime