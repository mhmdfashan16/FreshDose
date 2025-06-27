import React from 'react'
import tablets from '../assets/tablets'

const Cart = () => {
  return (
    <div className='pl-10 pr-10 flex items-center justify-center'>
      <div>
        <h1 className='text-2xl font-bold'>Your Cart {4} items</h1>
        <div className='grid gap-5'>
            <div className='grid grid-cols-4 '>
                <p>Items</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            {
                tablets.map((item, key)=>{
                    return (
                    <div key={key} className='grid grid-cols-4 gap-5'>
                        <div key={key} className='flex gap-5 '>
                            <img src={item.image} alt="" className='w-20 border border-gray-400 rounded-2xl'/>
                            <div className=''>
                            <p>{item.name}</p>
                            <p>{item.brand}</p>
                            <p>{item.use}</p>
                            <p>{item.category}</p>  
                            </div>                         
                        </div>
                        <p>{item.price}</p>
                        <div className='justify-center'>
                            <div className='flex gap-3 items-center border border-gray-400 w-fit p-1 rounded-full'>
                                <div className='flex justify-center border border-gray-400 rounded-full w-8 p-1 items-center font-extrabold'>+</div>
                                5
                                <div className='flex justify-center border border-gray-400 rounded-full w-8 p-1 items-center font-extrabold'>-</div>
                            </div>
                        </div>
                        <p>{item.price*5}</p>

                    </div>
                )})
            }
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
