import Navbar from './Navbar'

function Error({error}) {
  return (
    <div className="container">
    <Navbar />
    <div className='error-loading'>
      <h1>{error}</h1>
    </div>
    </div>
  )
}

export default Error