import { useState, useEffect, useContext } from 'react'
import './App.css'
import useFetch from '../../useFetch'
import Nav from './components/Nav';
import Anime from './components/Anime';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function App() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function call()
    {
      const {api,err} = await useFetch();
      setData(api)
      setError(err)
    }
    call()

    return () =>
    {
      console.log("clean up")
    }
    },[])


  return(
    <>
      <Nav />
      <Sidebar />
      {
        error ? 
        <Error />
        : <Anime anime={data} />
      }
      <Footer />
    </>
  )
  
}
