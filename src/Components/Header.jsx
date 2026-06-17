import Navbar from "./Navbar"

function Header()
{
    return (
        <div className="bg-blue-700 flex items-center justify-between py-4 px-8">
            <div className="flex items-center gap-5">
                <img className="w-17 h-17" src="/play-button.png"/>
                <p className="font-marker text-5xl text-white">Movies Hub</p>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header