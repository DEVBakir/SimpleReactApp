import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from "./Components/Navbar";
import "./App.css";
import Slider from "./Components/Slider";
import Detail from "./Components/Detaill";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Products from "./Components/Products"
const About = React.lazy(()=> import("./Components/About"))

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
        <header>
        <Navbar />
      </header>
      <main>
        <Slider />
      </main>
          </>} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/about" element={
          <Suspense fallback="<h1>Loading </h1>">
                    <Products />
          </Suspense>
        } /> 
      </Routes>
    </>    
  );
}
export default App;