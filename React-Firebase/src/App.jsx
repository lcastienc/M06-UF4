import './App.css'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu'
import MoviesAdd from './components/MoviesAdd'
import MoviesList from './components/MoviesList'
function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/IndexMenu" element={<IndexMenu />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
        <Route path="/movies/list" element={<MoviesList />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
