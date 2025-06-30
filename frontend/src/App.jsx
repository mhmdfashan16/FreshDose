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
import Cart from "./pages/Cart";
import AdminCatalouge from "./pages/admin/AdminCatalouge";
import assets from "./assets/assets";

const App = () => {
  const { showLogin, setShowLogin, showChatBot, setShowChatBot, userState, adminState, setAdminState, navigate } = useStoreContext();

  return (
    
    <div className="">
      {userState &&
      <div className="group inline-block ">
      <div className="absolute right-0 w-2xl h-fit opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-900">
        <div className="fixed flex items-end flex-col right-5 top-95 gap-3">
        <div className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-lg cursor-pointer">Hello</div>
        <div className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-lg cursor-pointer">Hey there! This is Shan Pharmacy Store. How can I help you?</div>
        <div className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-lg cursor-pointer">Hi, I need something for a cold and sore throat.</div>
        <div className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-lg cursor-pointer">Can I pay online?</div>
        </div>
      </div>
      <img src={assets.chatBot_icon} alt="" className="fixed  bottom-8 right-8 w-20 duration-50 animate-pulse border-4 rounded-full p-2 cursor-pointer" onClick={()=>setShowChatBot(true)}/>

      </div>}

      {showLogin ? <Login /> : <></>}
      {showChatBot && <Chat/>}
      {userState ? <Navbar />:''}
      {adminState && <AminLogin/>}
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
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<AdminCatalouge/>}/>
      </Routes>
      {userState && <Footer/>}

    </div>


  );
};

export default App;
