import { useEffect, useState } from "react"
import { MoveRight } from 'lucide-react';
import { Link } from "react-router-dom";

function Home()
{
    const apiKey = import.meta.env.VITE_TMDB_API_KEY; 

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [playingMovies, setPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(function(){
        fetchPopularMovies();
        fetchTopRatedMovies();
        fetchPlayingMovies();
        fetchUpcomingMovies();
        fetchTrendingMovies();
    }, []);

    async function fetchPopularMovies()
    {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

        const data = await response.json();

        setPopularMovies(data.results);
    }

    async function fetchTopRatedMovies()
    {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);

        const data = await response.json();

        setTopRatedMovies(data.results);
    }

    async function fetchPlayingMovies()
    {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);

        const data = await response.json();

        setPlayingMovies(data.results);
    }

    async function fetchUpcomingMovies()
    {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);

        const data = await response.json();

        setUpcomingMovies(data.results);
    }

    async function fetchTrendingMovies()
    {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);

        const data = await response.json();

        setTrendingMovies(data.results);
    }

    return (
        <div>
            <div className="w-[90%] m-auto pt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <p className="text-white text-3xl font-bold">Popular</p>
                    </div>
                    <Link to="/popular">
                        <button className="text-white flex items-center gap-2 mr-4 hover:cursor-pointer hover:text-red-500 transition duration-300">View All <MoveRight /></button>
                    </Link>
                </div>
                <div className="flex overflow-x-auto gap-10 pt-5 ">
                        {popularMovies.map(function(movie){
                            return (
                                <Link to={`/movie/${movie.id}`}>
                                    <div>
                                        <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                        <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>

            <div className="w-[90%] m-auto pt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <p className="text-white text-3xl font-bold">Top Rated</p>
                    </div>
                    <Link to="/top_rated">
                        <button className="text-white flex items-center gap-2 mr-4 hover:cursor-pointer hover:text-red-500 transition duration-300">View All <MoveRight /></button>
                    </Link>
                </div> 
                <div className="flex overflow-x-auto gap-10 pt-5 ">
                        {topRatedMovies.map(function(movie){
                            return (
                                <Link to={`/movie/${movie.id}`}>
                                    <div>
                                        <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                        <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>

            <div className="w-[90%] m-auto pt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <p className="text-white text-3xl font-bold">Now Playing</p>
                    </div>
                    <Link to="/now_playing">
                        <button className="text-white flex items-center gap-2 mr-4 hover:cursor-pointer hover:text-red-500 transition duration-300">View All <MoveRight /></button>
                    </Link>
                </div>
                <div className="flex overflow-x-auto gap-10 pt-5 ">
                        {playingMovies.map(function(movie){
                            return (
                                <Link to={`/movie/${movie.id}`}>
                                    <div>
                                        <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                        <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>

            <div className="w-[90%] m-auto pt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <p className="text-white text-3xl font-bold">Trending This Week</p>
                    </div>
                    <Link to="/trending">
                        <button className="text-white flex items-center gap-2 mr-4 hover:cursor-pointer hover:text-red-500 transition duration-300">View All <MoveRight /></button>
                    </Link>
                </div>
                <div className="flex overflow-x-auto gap-10 pt-5 ">
                        {trendingMovies.map(function(movie){
                            return (
                                <Link to={`/movie/${movie.id}`}>
                                    <div>
                                        <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                        <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>

            <div className="w-[90%] m-auto pt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <p className="text-white text-3xl font-bold">Upcoming</p>
                    </div>
                    <Link to="/upcoming">
                        <button className="text-white flex items-center gap-2 mr-4 hover:cursor-pointer hover:text-red-500 transition duration-300">View All <MoveRight /></button>
                    </Link>
                </div>
                <div className="flex overflow-x-auto gap-10 pt-5 ">
                        {upcomingMovies.map(function(movie){
                            return (
                                <Link to={`/movie/${movie.id}`}>
                                    <div>
                                        <img className="h-55 w-40 rounded-lg transition hover:cursor-pointer duration-300 hover:scale-105 hover:brightness-110" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                        <p className="text-gray-200 font-semibold w-40 mt-2 transition hover:text-red-500">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Home