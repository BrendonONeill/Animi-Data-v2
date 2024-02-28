import Nav from './Nav';
import Anime from './Anime';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState, useEffect} from 'react'
import { useFetch } from '../useFetch'

function TopAnime() {
  const [error, setError] = useState(null)
  const [drawer, setDrawer] = useState(true)
  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState(1)

  useEffect(() => {
    async function call()
    {
      const {api,err} = await useFetch(pagination);
      setData(api)
    }
    call()
    return () =>
    {
      console.log("clean up")
    }
  },[pagination])

  return (
    <>
    <Nav setDrawer={setDrawer} drawer={drawer} />
    <Sidebar setDrawer={setDrawer} drawer={drawer} />
    {
      error ? 
      <Error />
      : <Anime anime={data} pagination={pagination} setPagination={setPagination} />
    }
    <Footer />
    </>
  )
}

export default TopAnime