import Card from './card'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Loading() {
  return (
    <div className="container">
    <Navbar />
    <div className='main-section'>
    <h1>Loading...</h1>
    </div>
    </div>
  )
}

export default Loading