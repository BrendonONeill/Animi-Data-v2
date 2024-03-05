import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchGenre } from "../useFetch";
import  {useZustand} from '../context/Zustand';
import { useQuery} from "@tanstack/react-query"
import { Link } from "react-router-dom";
import Card from './card'

function Genre() {
  const {genre} = useParams();

  const pagination = useZustand((state) => state.pagination)
  const storedData = useZustand((state) => state.data)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateData)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)
  const updatePagination = useZustand((state) => state.updatePagination)

  const {data,isError,isLoading,isSuccess} = useQuery({ queryKey: ['genre', genre, pagination], queryFn: () => useFetchGenre(genre,pagination), retry: 2})

  const paginationChange = (number) => {
    updatePagination(number)
  }

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