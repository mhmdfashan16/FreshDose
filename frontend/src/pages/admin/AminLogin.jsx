import React, { useState } from 'react'
import assets from '../../assets/assets'

const AminLogin = () => {
  const [pass, setPass] = useState(false);
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex flex-col gap-3 items-center w-fit mt-40'>
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
  )
}

export default AminLogin
