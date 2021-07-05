import React from 'react'
import axios from 'axios'
import Search from './Search'
import Navbar from './Navbar'
import Photos from './Photos'
import apiKey from '../config'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [pics, setPics] = React.useState([])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const componentDidMount = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json`)
      .then(response => {
        // handle success
        console.log(response);
        setPics(response)
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data', error);
      })
  }

  return (
    <div className="App">
      <Search 
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <Navbar />

      <Photos 
        pics={pics}
      />

    </div>
  );
}

export default App;
