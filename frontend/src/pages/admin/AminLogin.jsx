import React, { useState } from 'react'
import assets from '../../assets/assets'
import { useStoreContext } from '../../context/StoreContext';

const AminLogin = () => {
  const [pass, setPass] = useState(false);
  const {adminState, setAdminState}= useStoreContext();
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 z-10 flex justify-center items-center' onClick={()=>setAdminState(false)}>
      <div className=' flex items-center justify-center bg-white h-fit p-5 '>
      <div className='flex flex-col gap-3 items-center w-fit '>
        <p className='text-2xl font-bold '>Admin Login</p>
        <img className='w-50' src={assets.admin_panel} alt="" />
        <input className='border-1  p-3 rounded-2xl bg-black text-white w-md h-15' type="text" placeholder='admin email address' />
        {
          !pass && <input className='border-1  p-3 rounded-2xl bg-black text-white w-md h-15' type="text" placeholder='admin password'/>
        }
        
        {!pass && <p>click here to <span  className='text-blue-800 cursor-pointer'onClick={()=>setPass(true)}>forget </span>password</p>}
        
        <button
        
        className='bg-gray-700 text-white text-xl w-md rounded-2xl h-10'>{pass?'Send Otp':'Login'}</button>
        
      </div>
    </div>
    </div>


  )
}

export default AminLogin
