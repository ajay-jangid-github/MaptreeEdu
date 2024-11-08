import React, { Children, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';

import Home from './Components/Home/Home';
import Sidebar from './Components/Side_Bar/Sidebar';
import Aboutus from './Components/About_Us/Aboutus';
import Popup from './Components/Pop_Up/Popup';
import Courses from './Components/Courses';
import Contact_Form from './Components/Form/Contact_Form';
import Theme from './Components/Theme';
import Competitve from './Components/Programs_Pages/Competitive';
import It_Training from './Components/Programs_Pages/It_Training';
import Schooling from './Components/Programs_Pages/Schooling';
import Date_Time from './Components/Date_Time/Date_Time';
import Login from './Components/Form/Login';
import SeatGrid from './SeatGrid';

//crud-part
import Create from './Components/Crud/Create';
import Update from './Components/Crud/Update';
import Read from './Components/Crud/Read';
import Crud_Data from './Components/Crud/Crud_Data';
import MayBeShowNavBar from './Components/MayBeShowNavBar';


export const UserContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(



    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='/sidebar' element={<Sidebar />} />
      <Route path='/popup' element={<Popup />} />


      <Route exact path='/courses' element={<Courses />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/contact_form' element={< Contact_Form />} />
      <Route path='/theme' element={<Theme />} />
      <Route path='/competitive' element={<Competitve />} />
      <Route path='/schooling' element={<Schooling />} />
      <Route path='/it_training' element={<It_Training />} />
      <Route path='/date_time' element={<Date_Time />} />
      <Route path='/login' element={<Login />} />
      <Route path="/new_select" element={<Element ></Element>} />
      <Route path='/SeatGrid' element = {<SeatGrid />} />
      { /*<Route  path='/crud' element = {<LayoutWithoutHeaderFooter />} /> */}

    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
