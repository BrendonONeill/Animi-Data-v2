import React, { useState } from 'react'
import Card from './card'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Anime({anime, pagination, setPagination}) {
  const paginationChange = (number) => {
    setPagination(number)
  }

  return (
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {anime !== null ?
    <>
    <div className='card-grid'>
      {anime.data.map((data) => (
        <Link to={`anime-information/${data.mal_id}`} key={data.mal_id} className='card-link'><Card data={data} /></Link>
    ))}
    </div>
    <div className='pagination-section'><button className='pagination-button' onClick={() => paginationChange(pagination - 1)}>{pagination - 1}</button><p className='pagination-button pagination-main'>{pagination}</p><button className='pagination-button' onClick={() => paginationChange(pagination + 1)}>{pagination + 1}</button></div>
    </>
    : <><h1>No Data</h1></>}
    </div>
    </div>
  )
}

export default Anime