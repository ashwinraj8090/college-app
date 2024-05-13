import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutProfile from './components/AboutProfile';
import AboutVision from './components/AboutVision';
import AboutDepartments from './components/AboutDepartments';
import AboutFacilities from './components/AboutFacilities';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/AboutProfile",
    element: <AboutProfile/>,
  },
  {
    path: "/AboutVision",
    element: <AboutVision/>,
  },
  {
    path: "/AboutDepartments",
    element: <AboutDepartments/>,
  },
  {
    path: "/AboutFacilities",
    element: <AboutFacilities/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUs/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
