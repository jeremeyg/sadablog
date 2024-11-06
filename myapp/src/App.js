import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Fix path with a colon before id */}
            <Route path="/blogs/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
