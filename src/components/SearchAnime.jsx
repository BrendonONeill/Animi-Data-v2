import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchSearch } from "../useFetch";
import  {useZustand} from '../context/Zustand';
import { useQuery} from "@tanstack/react-query"
import { Link } from "react-router-dom";
import Card from './Card'


function SearchAnime() {
  const {name} = useParams();

  const storedData = useZustand((state) => state.data)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateData)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)


  const {data,isError,isLoading,isSuccess} = useQuery({ queryKey: ['search', name], queryFn: () => useFetchSearch(name), retry: 2})

  useEffect(() => {
    updateData(data)
  },[data])


  return (
    <>
    <Nav updateDrawer={updateDrawer} drawer={drawer} />
    <Sidebar updateDrawer={updateDrawer} drawer={drawer} />
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {storedData !== null ?
    <>
    <div className='card-grid'>
      {storedData?.data.map((data) => (
        <Link to={`../anime-information/${data.mal_id}`} key={data.mal_id}><Card data={data} /></Link>
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
