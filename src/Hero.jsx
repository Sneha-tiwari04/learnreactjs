import { Link } from "react-router-dom"
import applebg from "./assets/apple.jpg"

function Hero(){
  return(

    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${applebg})` }}
    >

      <h1 className="text-5xl font-bold mb-4" >
        Welcome to Apple
      </h1>

      <p className="mb-6 text-lg">
        Innovation that inspires.
      </p>

      <div className="space-x-4">
        <Link 
          to="/signup"
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </Link>

        <Link 
          to="/login"
          className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black"
        >
          Login
        </Link>
      </div>

    </div>

  )
}

export default Hero