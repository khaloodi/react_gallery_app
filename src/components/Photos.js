import React from 'react'
import NotFound from './NotFound'

const Photos = ({pics}) => {
  const listItems = pics.map((pic) => 
    <li key={pic.id}>
      <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg`} alt="" />
    </li>
  )
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {pics.length > 0
          ? listItems
          : <NotFound />
        }
      </ul>
    </div>
  )
}

export default Photos