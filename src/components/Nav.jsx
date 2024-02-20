import burger from "../assets/burger.svg"
import search from "../assets/search.svg"

function Nav({setDrawer, drawer}) {
  
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
        </div>
    </nav>
  )
}

export default Nav