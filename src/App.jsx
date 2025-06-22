import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./components/favorites";
import Home from "./components/Home";
import Moviecontext from "./components/context/Moviecontext";
function App(){
  return(
    <>
    <Moviecontext>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
    </Moviecontext>
    </>
  )
}

export default App;