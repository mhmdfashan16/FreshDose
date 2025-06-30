import React, { useState } from 'react'
import assets from '../../assets/assets'
import Addproduct from './Addproduct';
import ListProduct from './ListProduct';
import ListOrders from './ListOrders';
import axios from 'axios';
import { useStoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const AdminCatalouge = () => {

  const {isSeller, setIsSeller, navigate, setUserState}= useStoreContext();

  const [state, setState]=useState('add-product');
  const logout= async ()=>{
    try{
      const {data}= await axios.get('/api/admin/logout',{withCredentials:true});
      if(data.success){
        
        toast.success(data.message);
        setIsSeller(false);
        setUserState(true);
        navigate('/');
      }
    }catch(error){
      toast.error(error.message);
    }
  }

  return (
    <div className='pl-20 pr-20 pt-10'>
      <div className='flex gap-[70%]'>
        <img src={assets.freshDose_logo_3} alt="" className='w-40 h-10'/>
        <div className='flex items-center gap-5'>
          <p className='text-gray-600 text-lg'>Hello admin</p>
          <img src={assets.user_icon} alt="" className='w-10'/>
          <button className='bg-black text-white p-2 h-10 rounded-xl cursor-pointer'
          onClick={logout}
          >Logout</button>
        </div>
      </div>
      <hr className='mt-3 text-gray-400'/>
      <div className='flex gap-10 pt-10'>
        <div className='flex border border-r border-l-0 border-t-0 border-b-0 border-gray-500 w-fit  p-2 gap-10 flex-col'>
        <div className='border-0 bg-gray-300 p-2 text-xl w-70 cursor-pointer' style={state === "add-product" ? { background: "black", color: "white" } : {}}
        onClick={()=>setState("add-product")}
        >Add product</div>
        <div className='border-0 bg-gray-300 p-2 text-xl w-70 cursor-pointer' style={state === "list-product" ? { background: "black", color:"white" } : {}}
        onClick={()=>setState("list-product")}
        >List all Products</div>
        <div className='border-0 bg-gray-300 p-2 text-xl w-70 cursor-pointer' style={state === "show-orders" ? { background: "black", color:"white" } : {}}
        onClick={()=>setState("show-orders")}
        >Show Orders</div>
      </div>
      <div>
        {state === "add-product" && <Addproduct className=''/>}
        {state === "list-product" && <ListProduct/>}
        {state === "show-orders" && <ListOrders/>}
        
      </div>

      </div>

    
    </div>
  )
}

export default AdminCatalouge
