import Card from './Card'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import  {useZustand} from '../context/Zustand';
import { useState } from 'react';

function Anime({anime, pagination, updatePagination}) {
  const paginationChange = (number) => {
    updatePagination(number)
  }

  const closeSearch = useZustand((state) => state.closeSearch)
  const updateType = useZustand((state) => state.updateType)
  const [filter, setFilter] = useState("")

  const filterAnime = (e) =>
  {
    e.preventDefault()
    updateType(filter)
  }

  return (
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {anime !== null ?
    <>


    <form className='anime-form' onSubmit={filterAnime}>
      <label htmlFor="">
       All <input type="radio" name="TV" id="filter" onChange={() => setFilter("")}/>
      </label>
      <label htmlFor="">
       TV <input type="radio" name="TV" id="filter" onChange={() => setFilter("tv")}  />
      </label>
      <label htmlFor="">
       Movie <input type="radio" name="TV" id="filter" onChange={() => setFilter("movie")}  />
      </label>
      <label htmlFor="">
      OVA <input type="radio" name="TV" id="filter" onChange={() => setFilter("ova")} />
      </label>
      <label htmlFor="">
       Special <input type="radio" name="TV" id="filter" onChange={() => setFilter("special")}  />
      </label>
      <input type="submit" className='submit-filter' value="Filter" />
    </form>


    <div className='card-grid'>
      {anime?.data.map((data) => (
        <Link to={`../anime-information/${data.mal_id}`} onClick={() => closeSearch() } key={data.mal_id} className='card-link'><Card data={data} /></Link>
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