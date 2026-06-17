function Footer()
{
    return (
        <div className="bg-[#111111] text-white mt-16" >
            
            <div className="text-white flex justify-between px-19 pt-15">
                <div>
                    <p className="text-4xl font-bold bg-white text-black px-2 py-3 rounded">Movies <span className="text-red-600">Hub</span></p>
                    <p className="text-lg text-gray-500 leading-7 pt-3">Discover thousands of movies, <br/>TV shows and trending entertainment <br/>from around the world.</p>
                </div>
                <div>
                    <p className="font-semibold text-xl text-white pb-2">Browse</p>
                    <ul className="text-gray-400 text-lg space-y-0.5">
                        <li className="hover:text-red-600 transition duration-200">Popular</li>
                        <li className="hover:text-red-600 transition duration-200">Trending</li>
                        <li className="hover:text-red-600 transition duration-200">Top Rated</li>
                        <li className="hover:text-red-600 transition duration-200">Upcoming</li>
                    </ul>
                </div>

                <div>
                    <p className="font-semibold text-xl text-white pb-2">Genres</p>
                    <ul className="text-gray-400 text-lg space-y-0.5">
                        <li className="hover:text-red-600 transition duration-200">Action</li>
                        <li className="hover:text-red-600 transition duration-200">Comedy</li>
                        <li className="hover:text-red-600 transition duration-200">Horror</li>
                        <li className="hover:text-red-600 transition duration-200">Sci-Fi</li>
                    </ul>
                </div>

                <div>
                    <p className="font-semibold text-xl text-white pb-2">Resources</p>
                    <ul className="text-gray-400 text-lg space-y-0.5">
                        <li className="hover:text-red-600 transition duration-200">About</li>
                        <li className="hover:text-red-600 transition duration-200">Contact</li>
                        <li className="hover:text-red-600 transition duration-200">Privacy</li>
                        <li className="hover:text-red-600 transition duration-200">FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="font-semibold text-xl text-white pb-2">Built With</p>
                    <ul className="text-gray-400 text-lg space-y-0.5">
                        <li className="hover:text-red-600 transition duration-200">React</li>
                        <li className="hover:text-red-600 transition duration-200">Tailwind</li>
                        <li className="hover:text-red-600 transition duration-200">TMDB API</li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-800 my-5" />
            <p className="text-center text-gray-500 pt-8">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            <p className="text-center text-gray-500 pb-6">© 2026 MovieFlix. All Rights Reserved.</p>
        </div>
    )
}

export default Footer