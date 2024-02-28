import { useState } from "react"
import { Link } from "react-router-dom"
import top from "../assets/top.svg"
import action from "../assets/action.svg"
import adventure from "../assets/adventure.svg"
import comedy from "../assets/comedy.svg"
import drama from "../assets/drama.svg"
import fantasy from "../assets/fantasy.svg"
import horror from "../assets/horror.svg"
import romance from "../assets/romance.svg"
import sliceOfLife from "../assets/slice.svg"
import x from "../assets/x.svg"

function Sidebar({setDrawer, drawer}) {

    const [genre,setGenre] = useState([{id: 0, icon: top, name: "Top Anime", active: true},{ id: 1, icon: action, name: "Action", active:false },{id: 2, icon: adventure, name: "Adventure", active:false},{id:4, icon: comedy, name: "Comedy", active:false},{id:8, icon: drama, name: "Drama" , active:false},{ id:10, icon: fantasy, name: "Fantasy", active:false},{ id:14, icon: horror, name: "Horror", active:false},{ id:22, icon: romance, name: "Romance", active:false},{ id:36, icon: sliceOfLife, name: "Slice of Life" ,active:false}])
  return (
    <div className={drawer ? "sidebar-black-card sidebar-black-card-active" : "sidebar-black-card sidebar-black-card-closed"}>
        <div className={drawer ? "sidebar sidebar-active" : "sidebar sidebar-closed"}>
            <div className="sidebar-header">
                <button className="sidebar-header-button" onClick={() => setDrawer(!drawer)}><img width={15} height={15} src={x} alt="" /></button>
            </div>
        <div>
        {
            genre.map((g) => (
                <Link to={`/Genre/${g.id}`} key={g.id}><button  className={g.active ? "genre genre-active" : "genre"}><img className="sidebar-icons" src={g.icon} width={25} height={25} alt="" />{g.name}</button> </Link>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Sidebar