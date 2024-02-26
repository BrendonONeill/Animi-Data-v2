import { useState } from "react"
import burger from "../assets/burger.svg"
import search from "../assets/search.svg"
import { useNavigate } from "react-router-dom"

function Nav({setDrawer, drawer}) {
  const [searchValue, setSearchValue] = useState("")
  const [searchBox, setSearchBox] = useState(false)

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
        <button className="nav-burger-button" onClick={() => setDrawer(!drawer)}><img src={burger} width={30} height={30}  alt="" /></button>
        </div>
        <div className="nav-logo">
        <h1>Animi-Data</h1>
        </div>
        <div className="nav-search">
            <button onClick={() => setSearchBox(!searchBox)}><img src={search} width={30} height={30}  alt="" /></button>
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