import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchSearch } from "../useFetch";
import { Link } from "react-router-dom";
import Card from './card'


function SearchAnime() {
  const {name} = useParams();
  const [drawer, setDrawer] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function call()
    {
      if(name)
      {
        setApiData(null)
        const {api,err} = await useFetchSearch(name);
        setApiData(api)
      }
    }
    call()

    return () =>
    {
      console.log("clean up")
    }
  },[name])


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
    </>
    : <><h1>No Data</h1></>}

    </div>
    </div>
    <Footer />
    </>
  )
}

export default SearchAnime