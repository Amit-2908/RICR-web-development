import React from "react";
import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";        
import Product from "./pages/Product";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
