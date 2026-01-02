import  { useState } from 'react';
import Header from './components/Header';
import Registeration from './pages/Registeration';

import Form from "./pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster/>
        <Header/>
        <Routes>
        <Route path="/" element={<Registeration/>}/>
        <Route path="/form" element={<Form/>}/>
        </Routes>
        
      </BrowserRouter>
     
      
    </>
  )
}

export default App
