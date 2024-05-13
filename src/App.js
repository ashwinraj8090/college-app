
import './App.css';
import {Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import AboutProfile from './components/AboutProfile';
import AboutVision from './components/AboutVision';
import MainLayout from './layout/MainLayout';

function App() {
  return (
     <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/AboutProfile" element={<AboutProfile/>}/>
          <Route path="/AboutVision" element={<AboutVision/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
    </MainLayout>
  );
}

export default App;
