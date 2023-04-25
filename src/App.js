import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import NotFound from "./NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" component={NotFound} />
    </Routes>
  </Router>
);

export default App;
