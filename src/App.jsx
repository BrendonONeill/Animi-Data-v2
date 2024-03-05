import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import TopAnime from './components/TopAnime'
import Genre from './components/Genre'
import AnimeInformation from './components/AnimeInformation'
import SearchAnime from './components/SearchAnime'

export default function App() {
    const router = createBrowserRouter([
      { 
        path: "/",
        element: <TopAnime />
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
    const queryClient = new QueryClient()

  return(
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  )
  
}
