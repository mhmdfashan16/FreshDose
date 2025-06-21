import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';

import ConductUs from "./pages/ConductUs";
import Login from "./pages/Login";
import {useStoreContext } from "./context/StoreContext";
import Category from "./pages/Category";
import Chat from "./pages/Chat"
import Home from "./components/Home";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";
import AminLogin from "./pages/admin/AminLogin";

const App = () => {
  const { showLogin, setShowLogin, showChatBot, userState } = useStoreContext();

  return (
    
    <div className="">
      {showLogin ? <Login /> : <></>}
      {showChatBot && <Chat/>}
      {userState && <Navbar />}
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/conduct-Us" element={<ConductUs />} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/admin-login" element={<AminLogin/>}/>
      </Routes>
      {userState && <Footer/>}

    </div>


  );
};

export default App;
