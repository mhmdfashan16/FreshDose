import React, { useState } from 'react'
import assets from '../assets/assets'
import { useStoreContext } from '../context/StoreContext';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';


const Login = () => {
   
    const {setShowLogin, setUser, setUserLogin, user} = useStoreContext();

    const [logState, setlogState] = React.useState("register");

    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

  const onSubmitLoginHandler = async (e) => {
  
  try {
     e.preventDefault(); 
    const { data } = await axios.post(
      `/api/user/${logState}`,
      {
        userName,
        email,
        password
      },
      { withCredentials: true }
    );
    if(data.success){
      setShowLogin(false);
      setUserLogin(true);
      setUser(data.user);
      
      toast.success(data.message);
      
    }else{
      toast.error(data.message);
    }        
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
    console.error(error.message);
  }
};


  return (
    <div  onClick={()=>setShowLogin(false)} className='fixed top-0 right-0 left-0 bottom-0 m-0 p-0 w-full h-full bg-black/80 z-1 flex items-center justify-center'> 
       <div className='absolute p-8 z-10 bg-black/70 top-40 w-fit h-fit border-0 rounded-2xl items-center'>
       <div className='flex flex-col'>
        <div  className='mt-2 flex justify-center'>
            {
                logState === "login" &&
                <h1 className=' text-white/90 font-bold text-2xl'>Login</h1>
            }
            {
                logState === "register" &&
                <h1 className=' text-white/90 font-bold text-2xl'>Sign Up</h1>
            }
            
            
        </div>

       </div>
        
        
        <form onSubmit={onSubmitLoginHandler} onClick={(e)=>e.stopPropagation()} action="" className='text-white flex flex-col gap-5 mt-8'>

            {
                logState === "login"
                ? <></>
                :
            <div>
                <label htmlFor="">user name : </label>
                <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} required className='border-2 border-gray-300 rounded-sm w-full h-10 text-md text-white/70'/>
            </div>           
            }
            
            <div>
            <label htmlFor="">Email : </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required className='border-2 border-gray-300 rounded-sm w-full h-10 text-md text-white/70'/>
            </div>
            <div>
            <label htmlFor="">Password : </label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required className='border-2 border-gray-300 rounded-sm w-full h-10 text-md text-white/70'/>
            </div>
            <div className='flex gap-3'>
                <input type="checkBox" required />
                <p className='text-sm'>Click this button to confirm your are a humen</p>
            </div>
            <div className='flex justify-center'>
                {
                    logState === "login" &&
                    <button type='submit' className='bg-black/80 w-full h-9 rounded-md cursor-pointer border-1 border-amber-50'>Login</button>                    
                }
                {
                    logState === "register" &&
                    <button type='submit' className='bg-black/80 w-full h-9 rounded-md cursor-pointer border-1 border-amber-50'>Register</button>
                }                
            </div>
            
        </form>
        <div className='flex flex-col justify-center items-center text-gray-400 text-sm mt-5'>
            {
                logState === "login" &&
                <p>don't have an account <span className='text-blue-300 underline cursor-pointer' onClick={(e)=>{e.preventDefault(); setlogState("register"); e.stopPropagation();}}>sign-up</span> here</p>
            }
            {
                logState === "register" &&
                <p>Already have an account <span className='text-blue-300 underline cursor-pointer' onClick={(e)=>{e.preventDefault(); setlogState("login"); e.stopPropagation();}}>login</span> here</p>
            }         
        </div>

       </div>
    </div>
  )
}

export default Login
