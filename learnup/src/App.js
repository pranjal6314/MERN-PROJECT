import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup';
import ForgertPassword from './components/Auth/ForgertPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgertPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
