import { useParams } from "react-router-dom"
import { useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchAnimeInformation } from "../useFetch";
import  {useZustand} from '../context/Zustand';
import { useQuery} from "@tanstack/react-query"

function AnimeInformation() {
  const {id} = useParams();

  const storedData = useZustand((state) => state.animeInformation)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateAnimeInformation)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)

  const {data,isError,isLoading,isSuccess} = useQuery({ queryKey: ['anime', id], queryFn: () => useFetchAnimeInformation(id), retry: 2})



  useEffect(() => {
    updateData(data?.data)
  },[data])

  return (
    <>
    <Nav updateDrawer={updateDrawer} drawer={drawer} />
    <Sidebar updateDrawer={updateDrawer} drawer={drawer} />
    <div className="container">
    <Navbar />
    <div className='main-section'>
    
    <div className="animeInformation-container">
      {storedData ?
      <div className="animeInformation">
      
      <img width={240} height={262} src={storedData?.images.webp.image_url} alt="" />
      <p>{storedData.title}</p>
      <p>{storedData.title_japanese}</p>

      <div className="animeInformation-grid">
        <div className="animeInformation-grid-header"><p>Score</p></div>
        <div className="animeInformation-grid-header"><p>Ranked</p></div>
        <div className="animeInformation-grid-header"><p>Popularity</p></div>
        <div><p>{storedData.score}</p></div>
        <div><p>{storedData.rank}</p></div>
        <div><p>{storedData.popularity}</p></div>
        <div className="animeInformation-grid-header"><p>Type</p></div>
        <div className="animeInformation-grid-header"><p>Episodes</p></div>
        <div className="animeInformation-grid-header"><p>Year</p></div>
        <div><p>{storedData.type}</p></div>
        <div><p>{storedData.episodes}</p></div>
        <div><p>{storedData.year}</p></div>
      </div>

      <div className="animeInformation-grid-text">
      <p><span className="animeInfo-header-different">Rating: </span> {storedData.rating}</p>
      <p className="animeInfo-header">Studios:</p>
      <div className="animeInformation-array-flex">
      {storedData.studios.map((studio) => (
        <p key={studio.name} className="animeInformation-array">{studio.name}</p>
      ))}
      </div>
      <p className="animeInfo-header">Genres:</p>
      <div className="animeInformation-array-flex">
      {storedData.genres.map((genre) => (
        <p key={genre.name} className="animeInformation-array">{genre.name}</p>
      ))}
      </div>
      <p className="animeInfo-header">Synopsis:</p>
      <p>{storedData.synopsis}</p>
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