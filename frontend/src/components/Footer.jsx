import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='p-20 ' >
      <hr className=' text-gray-400 mb-10'/>
      <img src={assets.freshDose_logo_3} className='w-40' alt="" /> 
      <div className="items-center pb-5 px-4 w-full mx-auto text-gray-700">
        <p className="text-lg leading-relaxed">
          This platform is designed to support your health by providing trusted pharmacy products, prescription services, doctor advice, and secure home delivery.
        </p>
      </div><hr className='text-gray-300'/>
      <div>
        <p className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} MediCare+. All rights reserved. 
        </p>

      </div>
    </div>
  )
}

export default Footer
