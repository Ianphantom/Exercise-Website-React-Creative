import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path='/' element={<AboutUs />} />
        <Route exact path='/work' element={<OurWork />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route exact path='/work/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
