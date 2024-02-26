import { useParams } from "react-router-dom"
import { useState } from "react";
import Navbar from './Navbar'
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './Sidebar';

function AnimeInformation() {
  const {id} = useParams();
  const [drawer, setDrawer] = useState(true);

  return (
    <>
    <Nav setDrawer={setDrawer} drawer={drawer} />
    <Sidebar setDrawer={setDrawer} drawer={drawer} />
    <div className="container">
    <Navbar />
    <div className='main-section'>
    {id}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimeInformation