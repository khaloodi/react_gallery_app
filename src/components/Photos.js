import React from 'react'

// const Photos = ({ pics }) => />)

// const Item = ({ title, url, author, num_comments, points }) => (
//     <div>
//       <span>
//         <a href={url}>{title}</a>
//       </span>
//       <span>{author}</span>
//       <span>{num_comments}</span>
//       <span>{points}</span>
//     </div>
// )

// export default List

const Photos = ({pics}) => {
  console.log(pics)
  const listItems = pics.map((pic) => 
    <li key={pic.id}>
      <img src={`https://farm5.staticflickr.com/${pic.secret}/${pic.id}_${pic.secret}.jpg`} alt="" />
    </li>
  )
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {listItems}
        {/* <li>
          <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
        </li> */}
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