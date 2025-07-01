import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ListingForm from "./pages/ListingForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<Details />} />
        <Route path="/createPost" element={<ListingForm />} />
      </Routes>
    </Router>
  );
}

export default App;