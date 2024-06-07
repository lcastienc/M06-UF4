import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../config/config.js';
import './styles/MoviesAdd.css';

function MoviesAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'movies'), {
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
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleBack = () => {
    navigate('/IndexMenu');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Afegir Pel·lícula</h2>
        <div className="form-group">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Títol" required />
        </div>
        <div className="form-group">
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripció" required />
        </div>
        <div className="form-group">
          <input type="text" value={direction} onChange={(e) => setDirection(e.target.value)} placeholder="Direcció" required />
        </div>
        <div className="form-group">
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL Imatge" required />
        </div>
        <div className="form-group">
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} min="1" max="5" required />
        </div>
        <div className="form-group">
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Any" required />
        </div>
        <div className="form-group">
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Durada (min)" required />
        </div>
        <div className="form-actions">
          <button type="submit">Afegir Pel·lícula</button>
          <button type="button" onClick={handleBack} className="back-button">Volver atrás</button>
        </div>
      </form>
    </div>
  );
}

export default MoviesAdd;

