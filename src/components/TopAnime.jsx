import Nav from './Nav';
import Anime from './Anime';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useEffect} from 'react'
import  {useZustand} from '../context/Zustand';
import { useFetch} from '../useFetch'
import { useQuery} from "@tanstack/react-query"

function TopAnime() {
  const pagination = useZustand((state) => state.pagination)
  const storedData = useZustand((state) => state.data)
  const drawer = useZustand((state) => state.drawer)
  const updateData = useZustand((state) => state.updateData)
  const updateDrawer = useZustand((state) => state.updateDrawerActive)
  const updatePagination = useZustand((state) => state.updatePagination)

  const {data,isError,isLoading,isSuccess} = useQuery({ queryKey: ['main', pagination], queryFn: () => useFetch(pagination), retry: 2})

  useEffect(() => {
      updateData(data)
  },[data])


  return (
    <>
    <Nav updateDrawer={updateDrawer} drawer={drawer} />
    <Sidebar updateDrawer={updateDrawer} drawer={drawer} />
    {
      isError ? <Error /> :
      storedData ? <Anime anime={storedData} pagination={pagination}  updatePagination={updatePagination} /> : null
    }
    <Footer />
    </>
  )
}

export default TopAnime