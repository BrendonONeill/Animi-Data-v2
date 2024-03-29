import Nav from './Nav';
import Anime from './Anime';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useEffect} from 'react'
import  {useZustand} from '../context/Zustand';
import { useFetch} from '../useFetch'
import { useQuery} from "@tanstack/react-query"
import Loading from "./Loading";
import Error from "./Error";

function TopAnime() {
  const pagination = useZustand((state) => state.pagination)
  const storedData = useZustand((state) => state.data)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateData)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)
  const updatePagination = useZustand((state) => state.updatePagination)
  const closeDrawer = useZustand((state) => state.closeDrawer)
  const animeType = useZustand((state) => state.animeType)

  const {data,isError,isLoading,isSuccess, error} = useQuery({ queryKey: ['main', pagination, animeType], queryFn: () => useFetch(pagination, animeType), retry: 2})

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

export default TopAnime