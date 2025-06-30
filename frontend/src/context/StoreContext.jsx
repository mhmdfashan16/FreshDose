// src/context/StoreContext.jsx
import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  const [adminState, setAdminState] = useState(false);
  const [admin, setAdmin]= useState(false);
  const [isSeller, setIsSeller]=useState(false);


const checkIsSeller=async()=>{
  try{
    const {data} =  await axios.get('/api/admin/check',{withCredentials:true})
    if(data.success){
      toast.success(data.message);
      setIsSeller(true);
    }else{
      toast.error(data.error);
      setIsSeller(false);
    }
  }catch(error){
    toast.error(error.message);
  }
}

useEffect(()=>{
  checkIsSeller();
},[])


useEffect(() => {
  const checkLogin = async () => {
    try {
      const { data } = await axios.get('/api/user/me', { withCredentials: true });
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

useEffect(()=>{
  const checkAdminLogin=async ()=>{
   
    try{
    const {data} = await axios.get('/api/admin/check',{withCredentials:true});
    if(data.success){
      setAdmin(data.admin);
      setUserState(false);
    }else{
      setAdmin(null);
    }
    }catch(error){
      setAdmin(false);
      console.log(error.message);
    }

  };
  checkAdminLogin();
},[])

useEffect(()=>{
    
},[navigate])



  const value={
    navigate,
    showLogin, setShowLogin,
    setUser,user,
    setShowChatBot, showChatBot,
    item, setItem,
    userState, setUserState,
    userLogin,setUserLogin,
    cartItems, setCartItems,
    adminState,setAdminState,
    admin, setAdmin,
    checkIsSeller, isSeller, setIsSeller,
    
    
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};


export const useStoreContext = () => useContext(StoreContext);
