function MovieCard(props) {
  return (
    <div className="movie-card">
      <h2>{props.emoji} {props.title}</h2>
      <p>Genre: {props.genre}</p>
      <h3>⭐ {props.rating}/10</h3>
    </div>
  );
}

export default MovieCard;