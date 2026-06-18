import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function MovieDetails()
{
    const params = useParams();
    const id = params.id;

    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(function(){
        fetchMovieDetails();
    }, []);

    async function fetchMovieDetails()
    {
        const apikey = import.meta.env.VITE_TMDB_API_KEY;

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`);
        const data = await response.json();

        console.log(data);
        setMovieInfo(data);
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <div className=" relative h-120 bg-cover bg-center" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`
            }}>

                <div className="absolute inset-0 bg-gray-900/60"></div>

                <div className="absolute flex gap-15 h-full px-20 py-5">
                    <img className="h-full rounded-xl" src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}/>
                    <div>
                        <p className="text-4xl text-white font-bold mb-4">{movieInfo.title} <span className="text-red-500 ml-3">({movieInfo.release_date?.slice(0,4)})</span></p>

                        <p className="mb-2">
                            <span className="text-gray-400 font-medium">Release Date:</span>
                            <span className="text-white ml-2">{movieInfo.release_date}</span>
                        </p>

                        <p className="mb-2">
                            <span className="text-gray-400 font-medium">Genre:</span>
                            <span className="text-red-400 ml-2">
                                {movieInfo.genres?.map(function(genre){
                                    return genre.name;
                                }).join(" • ")}
                            </span>
                        </p>

                        <p className="mb-2">
                            <span className="text-gray-400 font-medium">Duration:</span>
                            <span className="text-white ml-2">{movieInfo.runtime} mins</span>
                        </p>

                        <p className="text-red-300 text-xl font-semibold italic mt-8">"{movieInfo.tagline}"</p>
                        <p className="text-white text-2xl mt-8 font-bold border-l-4 border-red-600 pl-3">Overview</p>
                        <p className="text-gray-300 leading-7 text-lg max-w-4xl mt-4">{movieInfo.overview}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails