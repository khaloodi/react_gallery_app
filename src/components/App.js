import React from 'react'
import axios from 'axios'
import Search from './Search'
import Navbar from './Navbar'
import Photos from './Photos'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <Search 
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <Navbar />

      <Photos />

    </div>
  );
}

export default App;
