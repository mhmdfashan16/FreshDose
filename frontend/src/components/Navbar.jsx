import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import assets from '../assets/assets'
import { useStoreContext } from '../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';



const Navbar = () => {


  const {setShowLogin, showLogin, item, setItem, setUserState, userLogin, setUserLogin} = useStoreContext();
  const [log, setLog] = useState(false);

  const navigate = useNavigate();

 

  const logout = async(e)=>{
    
    try{
     
      const {data}=await axios.get('/api/user/logout');
      if(data.success){
        toast.success(data.success);
        setUserLogin(false);
      }else{
        toast.error(data.message)
      }
    }catch (error){
      toast.error(data.message);
    }
  }



  return (
      <div className='flex justify-center pl-35 pr-35 rounded-md items-center'>
      <div className='flex pt-4 pb-4 rounded-xl  gap-50 items-center w-full bg-white '>
        <img src={assets.freshDose_logo_3} alt=""
        className='w-50 ml-5 cursor-cell'
        // onClick={navigate('/')}
        />
        <div className='flex gap-15 items-center'>
          <ul className='flex gap-5'>
            <NavLink to={'/'}>Home</NavLink>
            <a href="#all-tablets">All Tablets</a>
            <a href="#conductUS">Conduct Us</a>
            <Link to={'/doctors'}>Doctors</Link>
            {/* <NavLink to={'/ConductUs'}>Conduct</NavLink> */}
          
        </ul>
        <div className='flex bg-gray-200 p-2 rounded-sm items-center'>
          <div className='relative group inline-block cursor-pointer'>
            <img src={assets.list_icon} alt="" 
            className='w-5 '
            />
            <div className='absolute top-12 w-xs bg-gray-300 rounded-md p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'>
            <ul className='flex flex-col gap-2 text-gray-700 '>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Infection deciese</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Non Infection Decese</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Mental and Nurological dissorder</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Cancers</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Hormonal Dissorder</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Respiratory Diseases</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Cardiovascular Diseases</li>
              <li className='border-b-1 border-gray-400 cursor-pointer w-auto hover:bg-gray-400/50'>Digestive System Disorders</li>
            </ul>
          </div>
          </div>      
        
          <input type="text" placeholder='Search medicines'
          className='pl-4 w-40 border-none ' 
          />
          <img src={assets.search_icon} alt="" 
          className='w-4 h-4'
          />
          <div className=' flex bg-black text-white rounded-full w-6 h-6 items-center justify-center ml-3 font-bold cursor-all-scroll'>
            A
          </div>
        </div>

      {/* Login Button with hover effect */}        
      {!userLogin&&
        <div className="relative group inline-block">
        <button
          className='bg-gray-700 text-white p-2 w-25 rounded-sm cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            setShowLogin(true);
          }}
        >
          Login
        </button>

        <div className='absolute left-0 flex-col bg-gray-200 mt-1 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'>
          <div className='p-3 flex gap-3 rounded-t-xl hover:bg-gray-400 cursor-pointer'
          onClick={(e)=>{e.preventDefault(); setShowLogin(true);}}
          >
            <p className='text-md'>user</p>
            <img className='h-5 w-5' src={assets.userIcon} alt="User" />
          </div>
          <hr className='text-gray-400 p-0 m-0'/>
          <div 
          onClick={()=>{
            navigate("/admin-login"); 
            setUserState(false);
          }}
          className='p-3 flex gap-3 rounded-b-xl hover:bg-gray-400 cursor-pointer'>
            <p>admin</p>
            <img className='h-5 w-5' src={assets.adminIcon} alt="Admin" />
            </div>
          </div>
        </div>  }
        {
          userLogin &&
          <button className='bg-gray-700 text-white p-2 w-25 rounded-sm cursor-pointer'
          onClick={logout}
          >Logout</button>
        }     
      </div>
    </div>
  </div>
    
    
  )
}

export default Navbar
