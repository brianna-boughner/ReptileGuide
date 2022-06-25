import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Navbar from './components/Navbar/Navbar';
import CareGuide from './components/CareGuide/CareGuide';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Quiz/Results';
import Contact from './components/Contact/Contact';
import './index.css';
import ScrollPage from './components/ScrollPage/ScrollPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careguide" element={<CareGuide />}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/scrollpage" element={<ScrollPage/>}/>
      
      </Routes>
      
    </BrowserRouter>
);
