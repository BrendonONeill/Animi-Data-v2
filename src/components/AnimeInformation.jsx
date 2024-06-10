import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchAnimeInformation } from "../useFetch";
import  {useZustand} from '../context/Zustand';
import { useQuery} from "@tanstack/react-query"
import back from "../assets/back.svg"
import Loading from "./Loading";

function AnimeInformation() {
  const {id} = useParams();
  const navigate = useNavigate()

  const storedData = useZustand((state) => state.animeInformation)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateAnimeInformation)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)

  const {data,isError,isLoading,isSuccess} = useQuery({ queryKey: ['anime', id], queryFn: () => useFetchAnimeInformation(id), retry: 2})
  const design = {backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 0.70), rgba(255, 255, 255, 1)), url('${storedData?.images.webp.large_image_url}')`}



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
    <>
      <button className="back-button" onClick={() => navigate(-1)}><img  src={back} width={40} height={40} alt="" /></button>
      <div style={design} className="animeInformation">
      
      <img width={240} height={262} src={storedData?.images.webp.image_url} alt="" />
      <p className="animeinformation-title">{storedData.title}</p>
      <p className="animeinformation-title">{storedData.title_japanese}</p>

      <div className="animeInformation-grid">
        <div className="animeInformation-grid-header"><p>Score</p></div>
        <div className="animeInformation-grid-header"><p>Ranked</p></div>
        <div className="animeInformation-grid-header"><p>Popularity</p></div>
        <div><p>{storedData.score ? storedData.score : "N/A"}</p></div>
        <div><p>{storedData.rank ? storedData.rank : "N/A"}</p></div>
        <div><p>{storedData.popularity ? storedData.popularity : "N/A"}</p></div>
        <div className="animeInformation-grid-header"><p>Type</p></div>
        <div className="animeInformation-grid-header"><p>Episodes</p></div>
        <div className="animeInformation-grid-header"><p>Year</p></div>
        <div><p>{storedData.type ? storedData.type : "N/A"}</p></div>
        <div><p>{storedData.episodes ? storedData.episodes : "N/A"}</p></div>
        <div><p>{ storedData.year ? storedData.year  : "N/A"}</p></div>
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

      
      {
        storedData?.trailer?.embed_url ?
        <>
        <p className="animeInfo-header">Trailer:</p>
        <iframe className="animeInfo-video" allowFullScreen
        src={storedData.trailer?.embed_url.slice(0, -1) + "0"}>
        </iframe> </>
      : null
      }
      </div>
      </div>
      </>
      : <Loading />}
    </div>

    </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimeInformation