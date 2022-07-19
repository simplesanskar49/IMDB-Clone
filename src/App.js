import React from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import MovieList from './components/movielist/MovieList'
import Movie from './components/moviedetail/Movie'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>} />
          <Route path='movies/:type' element={<MovieList/>} />
          <Route path="/*" element={<h2>Error Page</h2>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App