
function MovieCard({ title, image, rate, direction }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Rate: {rate}</p>
      <p>Directed by: {direction}</p>
    </div>
  );
}

export default MovieCard;
