function Card({data}) {
  return (
    <div className='card'>
          <div className="card-image-container"> 
          <img width={160} height={182} src={data.images.webp.image_url} alt="" />
          </div>
          <div className="card-text-container">
          <p className="card-anime-title">{data.title}</p>
          </div>
          <div className="card-rank">{data.rank}</div>
          <div className="card-score">{data.score}</div>
        
          <div className="tooltip"></div>
          <div className="tooltip-cover">
          <p>{data.episodes > 1 ? "Episodes: " + data.episodes : "Movie"}</p>
          <p>{data.year}</p>
          <p>{data.rating}</p>
          <div className="tooltip-genre">
          {data.genres ?
           data.genres.map((g, index) => ( <p key={index} className="tooltip-list">{g.name}</p>)) : null
          }
          </div>
          </div>
    </div>
  )
}

export default Card