import Navbar from './Navbar'

function Loading() {
  return (
    <div className="container">
    <Navbar />
    <div className='error-loading'>
    <h1 id='loading'>Loading...</h1>
    </div>
    </div>
  )
}

export default Loading