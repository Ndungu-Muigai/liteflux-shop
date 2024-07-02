import './App.css';
import "./Assets/CSS/Footer.css"
import "./Assets/CSS/Gallery.css"
import "./Assets/CSS/Services.css"
import "./Assets/CSS/Stats.css"

import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from "./Pages/Home/Home"
import Shop from "./Pages/Shop"
import Contact from "./Pages/Contact"

function App() 
{
  return (
    <div className='bg-slate-100 min-h-screen text-black'>
      <Navbar/>
      <div className='mt-24'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/shop' element={<Shop/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='*' element={<div>The page you're looking for doesn't exist</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
