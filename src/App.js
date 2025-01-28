import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct imports for v6 routing
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        {/* Define the routes with the element prop */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

