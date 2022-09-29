import "./App.css";
import Home from "../src/pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
