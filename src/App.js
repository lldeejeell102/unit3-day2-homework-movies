import logo from './logo.svg';
import './App.css';
import movies from './components/movies.js';
import Movie from './components/movie.js';





const App = (props) => {
  return (
    <div className="screen">
        {movies.map((v,i) => (
          <Movie
            name={v.name}
            year={v.year}
            rating={v.rating}
            image={v.image}
          />
        ))}
    </div>
  );
}
export default App;
