import React from 'react'

/* <li>
  <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
</li> */

// Cat picture url from flicker API:
// https://live.staticflickr.com/65535/51293482889_ea3216fb4f_w.jpg

// https://farm${pic.farm}.staticflickr.com/${pic.secret}/${pic.id}_${pic.secret}.jpg

const Photos = ({pics}) => {
  console.log(pics)
  const listItems = pics.map((pic) => 
    <li key={pic.id}>
      <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg`} alt="" />
    </li>
  )
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {listItems}

        {/* <!-- Not Found --> */}
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
  )
}

export default Photos