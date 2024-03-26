import Card from './card'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import  {useZustand} from '../context/Zustand';

function Anime({anime, pagination, updatePagination}) {
  const paginationChange = (number) => {
    updatePagination(number)
  }

  const closeSearch = useZustand((state) => state.closeSearch)

  return (
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {anime !== null ?
    <>
    <form className='anime-form' action="">
      <label htmlFor="">
       Tv <input type="checkbox" name="TV" id="tv" />
      </label>
      <label htmlFor="">
       Movie <input type="checkbox" name="TV" id="tv" />
      </label>
      <label htmlFor="">
      OVA <input type="checkbox" name="TV" id="tv" />
      </label>
      <label htmlFor="">
       Special <input type="checkbox" name="TV" id="tv" />
      </label>
      <input type="submit" value="Filter" />
    </form>
    <div className='card-grid'>
      {anime?.data.map((data) => (
        <Link to={`anime-information/${data.mal_id}`} onClick={() => closeSearch() } key={data.mal_id} className='card-link'><Card data={data} /></Link>
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