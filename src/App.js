import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Website/Components/Header";
import Footer from "./Website/Components/Footer";
import Index from "./Website/Pages/Index";
import Blog from "./Website/Pages/Blog";
import About from "./Website/Pages/About";
import Gallery from "./Website/Pages/Gallery";
import Service from "./Website/Pages/Service";
import Login from "./Website/Pages/Login";
import Signup from "./Website/Pages/Signup";

import AHeader from "./Admin/Components/AHeader";
import AFooter from "./Admin/Components/AFooter";
import Dashboard from "./Admin/Pages/Dashboard";
import Add_categories from "./Admin/Pages/Add_categories";
import Add_services from "./Admin/Pages/Add_services";
import Add_employee from "./Admin/Pages/Add_employee";
import Manage_categories from "./Admin/Pages/Manage_categories";
import Manage_employee from "./Admin/Pages/Manage_employee";
import Manage_services from "./Admin/Pages/Manage_services";
import Manage_user from "./Admin/Pages/Manage_user";
import Manage_contact from "./Admin/Pages/Manage_contact";
import Manage_feedback from "./Admin/Pages/Manage_feedback";
import Subcategories from "./Website/Pages/Subcategories";
import Alogin from "./Admin/Pages/Alogin";
import Asignup from "./Admin/Pages/Asignup";
import Profile from "./Website/Pages/Profile";
import Admin_profile from "./Admin/Pages/Admin_profile";




function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Header /><Index /><Footer /></>}></Route>
          <Route path="/blog" element={<><Header /><Blog /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/gallery" element={<><Header /><Gallery /><Footer /></>}></Route>
          <Route path="/service" element={<><Header /><Service /><Footer /></>}></Route>
          <Route path="/profile" element={<><Header /><Profile /><Footer /></>}></Route>
          <Route path="/subcategories" element={<><Header /><Subcategories /><Footer /></>}></Route>
          <Route path="/login" element={<><Login/></>}></Route>
          <Route path="/signup" element={<><Signup/></>}></Route>
          <Route path="/profile" element={<><Profile/></>}></Route>


          {/* 
            Admin 
          */}

          <Route path="/admin-dashboard" element={<><AHeader /><Dashboard /><AFooter /></>}></Route>
          <Route path="/Add_categories" element={<><AHeader /><Add_categories /><AFooter /></>}></Route>
          <Route path="/Add_services" element={<><AHeader /><Add_services /><AFooter /></>}></Route>
          <Route path="/Add_employee" element={<><AHeader /><Add_employee /><AFooter /></>}></Route>
          <Route path="/Manage_categories" element={<><AHeader /><Manage_categories /><AFooter /></>}></Route>
          <Route path="/Manage_employee" element={<><AHeader /><Manage_employee /><AFooter /></>}></Route>
          <Route path="/Manage_services" element={<><AHeader /><Manage_services /><AFooter /></>}></Route>
          <Route path="/Manage_user" element={<><AHeader /><Manage_user /><AFooter /></>}></Route>
          <Route path="/Manage_contact" element={<><AHeader /><Manage_contact /><AFooter /></>}></Route>
          <Route path="/Manage_feedback" element={<><AHeader /><Manage_feedback /><AFooter /></>}></Route>
          <Route path="/Alogin" element={<><Alogin/></>}></Route>
          <Route path="/Asignup" element={<><Asignup/></>}></Route>
          <Route path="/Aprofile" element={<><Admin_profile/></>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
