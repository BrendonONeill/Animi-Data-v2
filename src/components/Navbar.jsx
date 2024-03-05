import { NavLink} from "react-router-dom"
import  {useZustand} from '../context/Zustand';

function Navbar() {
  const genre = useZustand((state) => state.genre)
  const active = useZustand((state) => state.activeNav)
  const updateActiveNav = useZustand((state) => state.updateActiveNav)
      return (
            <div className="navbar-section">
                    {genre.map((g) => (
                       <NavLink to={g.link} key={g.id} ><button onClick={() => updateActiveNav(g.name)} className={g.name === active ? "genre genre-active" : "genre"}><img className="sidebar-icons" src={g.icon} width={25} height={25} alt="" />{g.name}</button></NavLink>
                    ))}
            </div>
      )
    }
    
export default Navbar