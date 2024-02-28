import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchAnimeInformation } from "../useFetch";

function AnimeInformation() {
  const {id} = useParams();
  const [drawer, setDrawer] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function call()
    {
      if(id)
      {
        const {api,err} = await useFetchAnimeInformation(id);
        setApiData(api.data)
        console.log(api)
      }
    }
    call()

    return () =>
    {
      console.log("clean up")
    }
  },[])

  return (
    <>
    <Nav setDrawer={setDrawer} drawer={drawer} />
    <Sidebar setDrawer={setDrawer} drawer={drawer} />
    <div className="container">
    <Navbar />
    <div className='main-section'>
    
    <div className="animeInformation-container">
      {apiData ?
      <div className="animeInformation">
      
      <img width={240} height={262} src={apiData.images.webp.image_url} alt="" />
      <p>{apiData.title}</p>
      <p>{apiData.title_japanese}</p>

      <div className="animeInformation-grid">
        <div className="animeInformation-grid-header"><p>Score</p></div>
        <div className="animeInformation-grid-header"><p>Ranked</p></div>
        <div className="animeInformation-grid-header"><p>Popularity</p></div>
        <div><p>{apiData.score}</p></div>
        <div><p>{apiData.rank}</p></div>
        <div><p>{apiData.popularity}</p></div>
        <div className="animeInformation-grid-header"><p>Type</p></div>
        <div className="animeInformation-grid-header"><p>Episodes</p></div>
        <div className="animeInformation-grid-header"><p>Year</p></div>
        <div><p>{apiData.type}</p></div>
        <div><p>{apiData.episodes}</p></div>
        <div><p>{apiData.year}</p></div>
      </div>

      <div className="animeInformation-grid-text">
      <p>Rating: {apiData.rating}</p>
      <p>Studios:</p>
      <div className="animeInformation-array-flex">
      {apiData.studios.map((studio) => (
        <p className="animeInformation-array">{studio.name}</p>
      ))}
      </div>
      <p>Genres:</p>
      <div className="animeInformation-array-flex">
      {apiData.genres.map((genre) => (
        <p className="animeInformation-array">{genre.name}</p>
      ))}
      </div>
      <p>Synopsis</p>
      <p>{apiData.synopsis}</p>
      </div>
      </div>:
      null}

    </div>

    </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimeInformation