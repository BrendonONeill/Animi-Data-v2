function Card({data}) {
  return (
    <div className='card'>
          <div className="card-image-container"> 
          <img width={160} height={182} src={data.images.webp.image_url} alt="" />
          </div>
          <div className="card-text-container">
          <p>{data.title}</p>
          </div>
          <div className="card-rank">{data.rank}</div>
          <div className="card-score">{data.score}</div>
    </div>
  )
}

export default Card