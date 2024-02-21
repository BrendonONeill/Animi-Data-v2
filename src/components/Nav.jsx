import burger from "../assets/burger.svg"
import search from "../assets/search.svg"
import { useNavigate } from "react-router-dom"

function Nav({setDrawer, drawer}) {

  const nav = useNavigate()
  let searchAnime = (e) => {
    e.preventDefault()
    nav("/search/test")

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
            <button><img src={search} width={30} height={30}  alt="" /></button>
            <div className="searchBox">
              <form onSubmit={searchAnime}>
                  <input type="text" placeholder="Pokemon" />
                <input type="submit" value="Search" />
              </form>
            </div>
        </div>
    </nav>
  )
}

export default Nav