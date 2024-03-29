import { useParams } from "react-router-dom"
import { useEffect } from "react";
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useFetchGenre } from "../useFetch";
import  {useZustand} from '../context/Zustand';
import { useQuery} from "@tanstack/react-query"
import Anime from './Anime';
import Loading from "./Loading";
import Error from "./Error";


function Genre() {
  const {genre} = useParams();

  const pagination = useZustand((state) => state.pagination)
  const storedData = useZustand((state) => state.data)
  const animeType = useZustand((state) => state.animeType)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateData)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)
  const updatePagination = useZustand((state) => state.updatePagination)
  const closeDrawer = useZustand((state) => state.closeDrawer)

  const {data,isError,isLoading,isSuccess, error} = useQuery({ queryKey: ['genre', genre, pagination, animeType], queryFn: () => useFetchGenre(genre,pagination,animeType), retry: 2})

  const paginationChange = (number) => {
    updatePagination(number)
  }

  useEffect(() => {
      updateData(data)
  },[data])

  
  return (
    <>
    <Nav updateDrawer={updateDrawer} drawer={drawer} closeDrawer={closeDrawer} />
    <Sidebar updateDrawer={updateDrawer} drawer={drawer} />
    {
      isLoading ? <Loading /> :
      isError ? <Error error={error.message} /> :
      isSuccess ? <Anime anime={storedData} pagination={pagination}  updatePagination={updatePagination} /> : null
    }
    <Footer />
    </>
  )
}

export default Genre