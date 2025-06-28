import React, { useEffect } from 'react'
import tablet_banner from '../assets/tablet_banner.jpg'
import assets from '../assets/assets'
import { useStoreContext } from '../context/StoreContext'
import { Link } from 'react-router'

const Hero = () => {

  const {setShowChatBot, navigate} = useStoreContext();

  // const shouldNavigate = false; // set this based on some logic

  // useEffect(() => {
  //   if (shouldNavigate) {
  //     navigate('/chat');
  //   }
  // }, [shouldNavigate, navigate]);


//style={{backgroundImage:`url(${assets.hero_4})`}}

  return (
    <div className='pl-20 pr-20'>
      <div className="flex flex-col gap-15 mt-10 rounded-xl p-10 bg-cover bg-center w-full "style={{backgroundImage:`url(${assets.tablet_bg})`}}>
      {/* style={{ backgroundImage: `url(${assets.banner})` }}  */}
     
      <div className='flex flex-col justify-center items-center gap-10 top-55 w-300'>
        <h1 className='text-black text-5xl font-bold flex flex-col gap-3'>Your Digital Pharmacy Care,
            <span>
             Convenience & Connection
            </span>
        </h1>
        <p className='text-3xl text-center'>Order medicines, get doctor advice, and chat with our smart assistant - all from the comfort of your home. Fast delivery. Secure payments. Trusted care.</p>
      </div>
      <div className='flex justify-center gap-10 items-center'>
        <img src={assets.chatBot_icon}
        alt="Chatbot"
        // className="w-12 h-12 animate-bounce origin-bottom-right"
        className='w-13 h-13 cursor-pointer rounded-full p-1 transition-transform duration-100 animate-bounce'
        onClick={()=>setShowChatBot(true)}

        />
 <Link to={'/doctors'}>
        <button
         className='bg-gray-700 p-2 w-50 rounded-lg text-white font-bold text-lg cursor-pointer'
         
        >Connect Doctors
        </button> 
 </Link>
      </div>
      {/* <img className='absolute w-150 h-200 top-20 right-0' src={assets.tablet_img} alt="" /> */}

    </div>

    </div>   
  )
}

export default Hero
