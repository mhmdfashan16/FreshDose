// src/context/StoreContext.jsx
import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;

const StoreContext = createContext(); 

export const StoreProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [user, setUser]= useState(false)
  
  const navigate = useNavigate();
  const [item, setItem] = useState(false);
  const [userState, setUserState] = useState(true);
  const[userLogin, setUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});

useEffect(() => {
  const checkLogin = async () => {
    try {
      const { data } = await axios.get("/api/user/me", { withCredentials: true });
      if (data.success) {
        setUserLogin(true);
        setUser(data.user);
      } else {
        setUserLogin(false);
        setUser(null);
      }
    } catch (err) {
      setUserLogin(false);
      setUser(null);
      console.error(err);
    }
  };

  checkLogin();
}, []);



  const value={
    navigate,
    showLogin, setShowLogin,
    setUser,user,
    setShowChatBot, showChatBot,
    item, setItem,
    userState, setUserState,
    userLogin,setUserLogin,
    
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};


export const useStoreContext = () => useContext(StoreContext);
