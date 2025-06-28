import React, { useState } from 'react'
import tablets from '../assets/tablets'
import { useStoreContext } from '../context/StoreContext';

const Cart = () => {

     const {cartItems, setCartItems} = useStoreContext();
    
     const tax = import.meta.env.VITE_APP_TAX;
     const shippingFee = import.meta.env.VITE_APP_SHIPPING_FEE;

     const [totalAmount, setTotalAmount] = useState(null);

     const setTotalProductAmount = ()=>{
        
     }

  return (
    <div className="px-10 flex justify-center">
  <div className="w-full max-w-6xl">
    <h1 className="text-2xl font-bold mb-6 mt-5">Your Cart ({tablets.length} items)</h1>

    <div className="grid gap-6 overflow-x-auto">
      
      <div className="grid grid-cols-[4fr_2fr_2fr_2fr] text-lg font-bold border-b border-gray-400 pb-2">
        <p>Items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      
      {tablets.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[4fr_2fr_2fr_2fr] items-center gap-4 border-b border-gray-300 pb-4 "
        >
          
          <div className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain border border-gray-300 rounded-xl"
            />
            <div className="space-y-1 text-sm">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">{item.brand}</p>
              <p className="text-gray-500">{item.use}</p>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </div>

        
          <p className="text-center font-medium">Rs. {item.price}</p>

          
          <div className="flex justify-center">
            <div className="flex items-center gap-2 border border-gray-400 p-1 rounded-full">
              <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 font-bold">+</button>
              <span>5</span>
              <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 font-bold">-</button>
            </div>
          </div>

        
          <p className="text-center font-medium">Rs. {item.price * 5}</p>
        </div>
      ))}
    </div>
<div className='flex gap-[26vh]'>
<div className='flex flex-col max-w-xl mt-20 gap-3'>
   <div className='grid grid-cols-[2fr_0.5fr_2fr]'>
    <p>Subtotal </p>
    <p>:</p>
    <p>Rs. 450</p>   
   </div><hr className='text-gray-300  border-1 w-92'/>

   <div className='grid grid-cols-[2fr_0.5fr_2fr]'>
    <p>Sales Tax {tax}</p>
    <p>:</p>
    <p>Rs. 450</p>
   </div><hr className='text-gray-300  border-1 w-92'/>

   <div className='grid grid-cols-[2fr_0.5fr_2fr]'>
    <p>Shipping Fee </p>
    <p>:</p>
    <p>Rs. {shippingFee}</p>
   </div><hr className='text-gray-300  border-1 w-92'/>

   {/* <div className='grid grid-cols-[2fr_0.5fr_2fr]'>
    <p>Coupon code </p>
    <p>:</p>
    <p>Rs. 450</p>    
   </div><hr className='text-gray-300  border-1 w-92'/> */}

   <div className='grid grid-cols-[2fr_0.5fr_2fr]'>
    <p>Grand total </p>
    <p>:</p>
    <p>Rs. 450</p>
   </div><hr className='text-gray-300  border-1 w-92'/>
   <button className='bg-black text-white w-fit pl-4 pr-4 pt-2 pb-2 cursor-pointer'>
    PROCEED TO PAYMENT
   </button>
   
    </div>

    <div className='mt-20'>
        <p className='text-xl mb-5'>If you have a coupon code.</p>
        <div className='border border-gray-400 w-fit'>
            <input type="text" placeholder='Enter your coupon here.'className=' pl-5 w-[60vh]'/>
            <button className='bg-black text-white p-3'>APPLY COUPON</button>
        </div>
    </div>
</div>    
</div>

</div>

  )
}

export default Cart
