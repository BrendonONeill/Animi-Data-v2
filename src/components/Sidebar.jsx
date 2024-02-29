import { useState } from "react"
import { NavLink } from "react-router-dom"
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

    const [genre,setGenre] = useState([{id: 0, icon: top, name: "Top Anime", active: true, link: "/"},{ id: 1, icon: action, name: "Action", active:false, link: "/Genre/1" },{id: 2, icon: adventure, name: "Adventure", active:false, link: "/Genre/2"},{id:4, icon: comedy, name: "Comedy", active:false, link: "/Genre/4"},{id:8, icon: drama, name: "Drama" , active:false, link: "/Genre/8"},{ id:10, icon: fantasy, name: "Fantasy", active:false, link: "/Genre/10"},{ id:14, icon: horror, name: "Horror", active:false, link: "/Genre/14"},{ id:22, icon: romance, name: "Romance", active:false, link: "/Genre/22"},{ id:36, icon: sliceOfLife, name: "Slice of Life" ,active:false, link: "/Genre/36"}])
  return (
    <div className={drawer ? "sidebar-black-card sidebar-black-card-active" : "sidebar-black-card sidebar-black-card-closed"}>
        <div className={drawer ? "sidebar sidebar-active" : "sidebar sidebar-closed"}>
            <div className="sidebar-header">
                <button className="sidebar-header-button" onClick={() => setDrawer(!drawer)}><img width={15} height={15} src={x} alt="" /></button>
            </div>
        <div>
        {
            genre.map((g) => (
                <NavLink to={g.link} key={g.id} className={({isActive}) => isActive ? g.active = true : g.active = false }><button  className={g.active ? "genre genre-active" : "genre"}><img className="sidebar-icons" src={g.icon} width={25} height={25} alt="" />{g.name}</button> </NavLink>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Sidebar