import ring from '../assets/ring.svg'

function Loading() {
  return (
    <div className="container">
    
    <div className='error-loading'>
      <img className='loading-ring' src={ring} width={80} height={80} alt="" />
    <h1 id='loading'>Loading...</h1>
    </div>
    </div>
  )
}

export default Loading