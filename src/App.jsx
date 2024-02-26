import { useState, useEffect, useContext } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import { useFetch } from './useFetch'
import TopAnime from './components/TopAnime'
import Genre from './components/Genre'
import AnimeInformation from './components/AnimeInformation'
import SearchAnime from './components/SearchAnime'

export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    async function call()
    {
      const {api,err} = await useFetch();
      setData(api)
    }
    call()

    return () =>
    {
      console.log("clean up")
    }
    },[])

    const router = createBrowserRouter([
      { 
        path: "/",
        element: <TopAnime data={data} />
      },
      {
        path: "/genre/:genre",
        element: <Genre />
      },
      {
        path: "anime-information/:id",
        element: <AnimeInformation />
      },
      {
        path: "/search/:name",
        element: <SearchAnime /> 
      }
    ]);

  return(
    <>
    <RouterProvider router={router} />
    </>
  )
  
}
