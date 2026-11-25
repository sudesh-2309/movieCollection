import MovieCard from "./movieCard";

function MovieList() {

  const movies = [
    {
      id: 1,
      emoji: "🚀",
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 8.7
    },
    {
      id: 2,
      emoji: "🦇",
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0
    },
    {
      id: 3,
      emoji: "🕷️",
      title: "Spider-Man",
      genre: "Adventure",
      rating: 8.2
    },
    {
      id: 4,
      emoji: "🦁",
      title: "The Lion King",
      genre: "Animation",
      rating: 8.5
    }
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          emoji={movie.emoji}
          title={movie.title}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;