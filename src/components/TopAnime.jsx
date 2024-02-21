import Nav from './Nav';
import Anime from './Anime';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState} from 'react'

function TopAnime({data}) {
  const [error, setError] = useState(null)
  const [drawer, setDrawer] = useState(true)

  return (
    <>
    <Nav setDrawer={setDrawer} drawer={drawer} />
    <Sidebar setDrawer={setDrawer} drawer={drawer} />
    {
      error ? 
      <Error />
      : <Anime anime={data} />
    }
    <Footer />
    </>
  )
}

export default TopAnime