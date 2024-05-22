import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/config';
import MovieCard from '../components/MovieCard';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesRef = ref(db, 'movies');
    onValue(moviesRef, (snapshot) => {
      const data = snapshot.val();
      const moviesArray = data ? Object.values(data) : [];
      setMovies(moviesArray);
    });
  }, []);

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
}

export default MoviesList;
