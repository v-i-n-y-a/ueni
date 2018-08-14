import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => (
  <div className='card'>
    <div className="card-image" >
      <img src={item.imageUrl} alt={item.name} />
    </div>
    <div className="card-body">
      <h2>{item.name}</h2>
      <div className="card-address">
          {item.city}, {item.country}
      </div>
      <div className="card-description">
          {item.description}
      </div>
      <div className="card-details-link">
        <Link to={`/details/${item.id}`}>Continue</Link>
      </div>
    </div>
  </div>
)

export default Card
