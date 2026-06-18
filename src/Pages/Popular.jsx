import { useEffect, useState } from "react";

function Popular() {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;

  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function () {
    fetchPopularMovies();
  }, [page]);

  async function fetchPopularMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${page}`);

    const data = await response.json();

    setPopularMovies(data.results);
  }

  function displayResult()
  {
    if(popularMovies.length === 0)
    {
        return <p className="text-white text-3xl font-bold m-auto py-20 animate-pulse">Loading...</p>;
    }
    else
    {
       return ( popularMovies.map(function (movie) {
          return (
            <div>
              <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
            </div>
          );
        }));
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
        <div className="flex items-center gap-3 px-11 pt-8">
            <div className="w-1.5 h-14 bg-red-600 rounded-full"></div>

            <div>
                <h1 className="text-4xl font-bold text-white">
                    Popular Movies
                </h1>

                <p className="text-gray-400 mt-1">
                    Browse the most popular movies around the world.
                </p>
            </div>
        </div>
      <div className="flex flex-wrap gap-13 p-11">
        {displayResult()}
      </div>

      <div className="flex justify-center items-center gap-10">
        <button onClick={function(){
            if(page > 1)
            {
                setPopularMovies([]);
                setPage(page - 1);
            }
        }} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300 hover:cursor-pointer">Prev</button>

        <p className="text-white text-lg font-medium">Page {page}</p>

        <button onClick={function(){
            setPopularMovies([]);
            setPage(page + 1);
        }} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300 hover:cursor-pointer">Next</button>
      </div>
    </div>
  );
}

export default Popular;
