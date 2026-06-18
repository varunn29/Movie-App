import { useEffect, useState } from "react";

function Trending() {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function () {
    fetchTrendingMovies();
  }, [page]);

  async function fetchTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}&page=${page}`);

    const data = await response.json();

    setTrendingMovies(data.results);
  }

  function displayResult()
  {
    if(trendingMovies.length === 0)
    {
        return <p className="text-white text-3xl font-bold m-auto py-20 animate-pulse">Loading...</p>;
    }
    else
    {
       return ( trendingMovies.map(function (movie) {
          return (
            <div>
              <img className="h-55 w-40 rounded-lg transition duration-300 hover:scale-105 hover:brightness-110"
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
                    Trending Movies
                </h1>

                <p className="text-gray-400 mt-1">
                    Explore the hottest movies trending across the world this week.
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
                setTrendingMovies([]);
                setPage(page - 1);
            }
        }} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300 hover:cursor-pointer">Prev</button>

        <p className="text-white text-lg font-medium">Page {page}</p>

        <button onClick={function(){
            setTrendingMovies([]);
            setPage(page + 1);
        }} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300 hover:cursor-pointer">Next</button>
      </div>
    </div>
  );
}

export default Trending;