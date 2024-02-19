import { useState } from "react"
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

function Sidebar() {

const [genre,setGenre] = useState([{id: 0, icon: top, name: "Top Anime", active: true},{ id: 1, icon: action, name: "Action", active:false },{id: 2, icon: adventure, name: "Adventure", active:false},{id:3, icon: comedy, name: "Comedy", active:false},{id:4, icon: drama, name: "Drama" , active:false},{ id:5, icon: fantasy, name: "Fantasy", active:false},{ id:6, icon: horror, name: "Horror", active:false},{ id:7, icon: romance, name: "Romance", active:false},{ id:8, icon: sliceOfLife, name: "Slice of Life" ,active:false}])
  return (
    <div className="sidebar-black-card">
        <div className="sidebar">
            <div className="sidebar-header">
                <button className="sidebar-header-button"><img width={15} height={15} src={x} alt="" /></button>
            </div>
        <div>
        {
            genre.map((g) => (
                <button key={g.id} className={g.active ? "genre genre-active" : "genre"}><img className="sidebar-icons" src={g.icon} width={25} height={25} alt="" />{g.name}</button>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Sidebar