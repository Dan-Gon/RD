import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import People from "./routes/People/People";
import Blog from "./routes/Blog/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
