import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"

function App()
{
    return (
        <div className="bg-black h-screen overflow-y-auto">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App