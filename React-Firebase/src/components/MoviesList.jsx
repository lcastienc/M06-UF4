
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../config/config';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/IndexMenu');
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'movies'));
        const moviesArray = querySnapshot.docs.map(doc => doc.data());
        setMovies(moviesArray);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      }
    };

    fetchMovies();
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
      <button type="button" onClick={handleBack} className="back-button">Volver atrás</button>
    </div>
  );
}

export default MoviesList;
