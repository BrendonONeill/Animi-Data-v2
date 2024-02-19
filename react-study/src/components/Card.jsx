function Card({data}) {
  return (
    <div className='card'>
          <img width={100} height={200} src={data.images.webp.image_url} alt="" />
          <p>{data.title}</p>
    </div>
  )
}

export default Card