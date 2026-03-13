<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./Hero"
import Login from "./Login"
import Signup from "./Signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

=======
import TravelCards from "./Travelcards"
function App(){
  return(
  
    <>
    
  
    <TravelCards/>
    </>
  )
}
>>>>>>> 4939e9a82481aa42c0aae76eca9f3a4d61965e5c
export default App