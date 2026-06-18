import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Popular from "./Pages/Popular"
import TopRated from "./Pages/TopRated"
import NowPlaying from "./Pages/NowPlaying"
import Trending from "./Pages/Trending"
import Upcoming from "./Pages/Upcoming"
import MovieDetails from "./Pages/MovieDetails"

function App()
{
    return (
        <div className="bg-[#0A0A0A] h-screen overflow-y-auto">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/top_rated" element={<TopRated/>}/>
                <Route path="/now_playing" element={<NowPlaying/>}/>
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App