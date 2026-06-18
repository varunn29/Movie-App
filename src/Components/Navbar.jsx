import { Link } from "react-router-dom"

function Navbar()
{
    return (
        <div className="text-white flex gap-10 items-center text-xl font-bold">
            <Link to="/">Home</Link>
            <p>Favorites</p>
            <p>Contact</p>
            <p>About</p>
        </div>
    )
}

export default Navbar