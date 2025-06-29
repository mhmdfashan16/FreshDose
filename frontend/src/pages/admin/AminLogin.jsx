import React, { useState } from 'react'
import assets from '../../assets/assets'
import { useStoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AminLogin = () => {
  const refreshPage=(e)=>{
    e.target
  }
  const [pass, setPass] = useState(false);
  const {adminState, setAdminState, userState, setUserState, navigate}= useStoreContext();
  const [email, setEmail]= useState('');
  const [password, setPassword]=useState('');

const onSubmitHandler=async(e)=>{
  e.preventDefault();
    try{
      const {data} = await axios.post('/api/admin/login',{email,password},{withCredentials:true});
      if(data.success){
        setAdminState(false);
        setUserState(false);
        
        navigate('/admin');
      }

      toast.success(data.message);
    }catch(error){
      toast.error(error.message)
    }
}
  
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 z-10 flex justify-center items-center'>
      <div className=' relative items-center justify-center bg-white h-fit p-5 '>
      <img src={assets.close} alt="" className='w-8 absolute right-2 top-1'
      onClick={()=>setAdminState(false)}
      />
      <form onSubmit={onSubmitHandler}  className='flex flex-col gap-3 items-center w-fit '>
        
        <p className='text-2xl font-bold '>Admin Login</p>
        <img className='w-50' src={assets.admin_panel} alt="" />
        <input className='border-1  p-3 rounded-2xl bg-black text-white w-md h-15' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='admin email address' />
        {
          !pass && <input className='border-1  p-3 rounded-2xl bg-black text-white w-md h-15' value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='admin password'/>
        }
        
        <p>click here to <span  className='text-blue-800 cursor-pointer'
        onClick={(e)=>{
          setPass(prev=>(!prev));
          e.target.preventDefault();
          }}>{pass ? 'remind':'forget'} </span>password</p>
        
        <button
        type='submit'
        className='bg-gray-700 text-white text-xl w-md rounded-2xl h-10 cursor-pointer'>{pass?'Send Otp':'Login'}</button>
        
      </form>
    </div>
    </div>


  )
}

export default AminLogin
