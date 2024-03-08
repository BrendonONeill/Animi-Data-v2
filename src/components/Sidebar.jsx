import { NavLink } from "react-router-dom"
import x from "../assets/x.svg"
import  {useZustand} from '../context/Zustand';

function Sidebar({updateDrawer, drawer}) {

    const genre = useZustand((state) => state.genre)
    const active = useZustand((state) => state.activeNav)
    const updateActiveNav = useZustand((state) => state.updateActiveNav)
    const updatePagination = useZustand((state) => state.updatePagination)
  return (
    <div className={drawer ? "sidebar-black-card sidebar-black-card-active" : "sidebar-black-card sidebar-black-card-closed"}>
        <div className={drawer ? "sidebar sidebar-active" : "sidebar sidebar-closed"}>
            <div className="sidebar-header">
                <button className="sidebar-header-button" onClick={() => updateDrawer()}><img width={15} height={15} src={x} alt="" /></button>
            </div>
        <div>
        {
            genre.map((g) => (
                <NavLink to={g.link} key={g.id}><button onClick={() => {updateActiveNav(g.name), updatePagination(1)}}  className={g.name === active ? "genre genre-active" : "genre"}><img className="sidebar-icons" src={g.icon} width={25} height={25} alt="" />{g.name}</button> </NavLink>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Sidebar