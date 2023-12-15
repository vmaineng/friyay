import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div>
        <Navbar />
      <Routes> 
    
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
