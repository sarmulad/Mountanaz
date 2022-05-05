import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Benefit from './Pages/Benefit';
import Footer from "./components/Footer";
function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Benefit" element={<Benefit/>} />
        </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
