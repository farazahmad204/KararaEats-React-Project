import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/base.css'; // Import the custom CSS file
import { useState } from 'react';
//ALL Components
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';




function App() {
const [alert, setalert] = useState(false);

const showalert=(message, type)=>{

  setalert({
    msg:message,
    type:type
  })

setTimeout(()=>{setalert(null)},3000);
}

  return (
    <Router>
      <div
      style={{
        backgroundImage: 'url(/images/background_image.webp)', // referencing image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px', // Adjust this based on the height of your navbar
      }}
    >
      {/* Your content goes here */}
      <Navbar />
      <Alert alert={alert}/>
      <div className="infobar text-center text-white text-bold">
        <h4><i className="fa-solid fa-car"></i> Delivering FREE in 30 km radius
          from Bentley (on $50+ order). </h4>
    </div>
   
    
     {/* Define the Routes for different pages */}
     <Routes>
    <Route path="/menu" element= {<Slideshow />} /> 
    <Route path="/about" element={<About  />} /> {/* About page  showalert={showalert}*/}
    <Route path="/contact" element={<Contact />} /> {/* Contact page*/}
    <Route path="/sign_up" element={<Signup />} /> {/* Contact page*/}
    <Route path="/login" element={<Login />} /> {/* Contact page*/}

    </Routes>
    </div>
    </Router>
  );
}

export default App;
