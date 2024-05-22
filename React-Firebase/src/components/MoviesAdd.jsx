import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/config.js';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function MoviesAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieRef = ref(db, 'movies/' + title);
    set(newMovieRef, {
      title,
      description,
      direction,
      image,
      rate,
      year,
      duration
    });
    setTitle('');
    setDescription('');
    setDirection('');
    setImage('');
    setRate(1);
    setYear('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Títol" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripció" required />
      <input type="text" value={direction} onChange={(e) => setDirection(e.target.value)} placeholder="Direcció" required />
      <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL Imatge" required />
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} min="1" max="5" required />
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Any" required />
      <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Durada (min)" required />
      <button type="submit">Afegir Pel·lícula</button>
    </form>
  );
}

export default MoviesAdd;
