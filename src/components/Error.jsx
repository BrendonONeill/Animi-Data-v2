import Navbar from './Navbar'
import { Link } from "react-router-dom"
import  {useZustand} from '../context/Zustand';


function Error({error}) {

  const updateActiveNav = useZustand((state) => state.updateActiveNav)


  return (
    <div className="container">
    <Navbar />
    <div className='error-loading'>
      <h1>{error}</h1>
      <a href='https://animi-data-v2.onrender.com/' className='error-button'><p >Return Home</p></a>
    </div>
    </div>
  )
}

export default Error