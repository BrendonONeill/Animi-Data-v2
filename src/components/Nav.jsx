import { useState } from "react"
import burger from "../assets/burger.svg"
import search from "../assets/search.svg"
import { useNavigate, Link } from "react-router-dom"
import  {useZustand} from '../context/Zustand';

function Nav({updateDrawer, drawer, closeDrawer}) {
  const [searchValue, setSearchValue] = useState("")
  const updateSearch = useZustand((state) => state.updateSearch)
  const closeSearch = useZustand((state) => state.closeSearch)
  const searchBox = useZustand((state) => state.searchBox)
  const updateActiveNav = useZustand((state) => state.updateActiveNav)

  const nav = useNavigate()
  let searchAnime = (e) => {
    e.preventDefault()
    if(searchValue !== "")
    {
      console.log("called")
      nav(`/search/${searchValue}`)
    }
  
  }
  
  return (
    <nav>
        <div className="nav-burger-section">
        <button className="nav-burger-button" onClick={() => {updateDrawer(), closeSearch()}}><img src={burger} width={30} height={30}  alt="" /></button>
        </div>
        <div className="nav-logo">
        <Link to={"../"}><h1 onClick={() => updateActiveNav("Top Anime") }>Animi-Data</h1></Link>
        </div>
        <div className="nav-search">
            <button onClick={() => {updateSearch(), closeDrawer()}}><img src={search} width={30} height={30}  alt="" /></button>
            {
              searchBox ? 
              <div className="searchBox">
              <form onSubmit={searchAnime}>
                  <input className="searchBox-input" type="text" placeholder="Pokemon" onChange={(e) => setSearchValue(e.target.value)} />
                <input className="searchBox-button" type="submit" value="Search" />
              </form>
            </div>
            : null
            }
        </div>
    </nav>
  )
}

export default Nav