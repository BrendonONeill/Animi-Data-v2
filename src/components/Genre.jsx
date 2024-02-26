import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchGenre } from "../useFetch";
import { Link } from "react-router-dom";
import Card from './card'

function Genre() {
  const {genre} = useParams();
  const [drawer, setDrawer] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    async function call()
    {
      if(genre)
      {
        setApiData(null)
        const {api,err} = await useFetchGenre(genre);
        setApiData(api)
      }
    }
    call()

    return () =>
    {
      console.log("clean up")
    }
  },[genre])

  
  return (
    <>
    <Nav setDrawer={setDrawer} drawer={drawer} />
    <Sidebar setDrawer={setDrawer} drawer={drawer} />
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {apiData !== null ?
    <>
    <div className='card-grid'>
      {apiData.data.map((data) => (
        <Link to={`anime-information/${data.mal_id}`} key={data.mal_id}><Card data={data} /></Link>
    ))}
    </div>
    <div className='pagination-section'><button className='pagination-button' onClick={() => paginationChange(pagination - 1)}>{pagination - 1}</button><p className='pagination-button pagination-main'>{pagination}</p><button className='pagination-button' onClick={() => paginationChange(pagination + 1)}>{pagination + 1}</button></div>
    </>
    : <><h1>No Data</h1></>}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Genre