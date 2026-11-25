import Header from "./components/header";
import MovieList from "./components/movieList";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;