import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import Navbar from './Navbar'
import Photos from './Photos'
import NotFound from './NotFound'
import apiKey from '../config'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [cats, setCats] = React.useState([])
  const [sunsets, setSunsets] = React.useState([])
  const [waterfalls, setWaterFalls] = React.useState([])
  const [search, setSearch] = React.useState([])

  
  React.useEffect (() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      setCats(response.data.photos.photo)
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }, [])
  
  React.useEffect (() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      setSunsets(response.data.photos.photo)
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }, [])
  
  React.useEffect (() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfalls&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      setWaterFalls(response.data.photos.photo)
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }, [])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setSearch(response.data.photos.photo)
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  return (
    <div className="App">
      <Header />
      <Search 
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        performSearch={performSearch}
      />
      <Navbar />

      <Switch>
            <Route exact path="/" render={() => <Redirect to="/cats" />} />
            <Route path="/cats" render={ () => <Photos pics={cats} />} />
            <Route path="/sunsets" render={ () => <Photos pics={sunsets} />} />
            <Route path="/waterfalls" render={ () => <Photos pics={waterfalls} />} />
            <Route path="/search_results" render={ () => <Photos pics={search} /> }/> 
            <Route
								render={() => (
									<ul>
										<NotFound />
									</ul>
								)}
							/>
      </Switch>

    </div>
  );
}

export default App;
