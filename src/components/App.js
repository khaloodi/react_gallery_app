import React from 'react'
import axios from 'axios'
import Search from './Search'
import Navbar from './Navbar'
import Photos from './Photos'
import apiKey from '../config'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [data, setData] = React.useState([])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  React.useEffect (() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        setData(response.data.photos.photo)
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data', error);
      })
  }, [])

  return (
    <div className="App">
      <Search 
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <Navbar />

      <Photos 
        pics={data} // photo data passed down as
      />

    </div>
  );
}

export default App;
