import React, { useState } from 'react'
import tablets from '../assets/tablets'
import { useStoreContext } from '../context/StoreContext';

const AllMedi = () => {
  const {cartItems, setCartItems} = useStoreContext();
  
  const [count, setCount] = useState(0);
  const countIncre =()=>{

  }
  const cartCountIncre = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    if(count===0){
      setCount(1);
    }else{
      setCount(count+1);
    }
  };

  const cartCountDecre = (id) => {
    setCartItems(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  return (
    <div className='pl-20 pr-20' id='all-tablets'>
      <h1 className='text-2xl font-bold mt-10'>All Medicines</h1>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {tablets.map((tablet, index) => {
          const count = cartItems[index] || 0;
          return (
            <div key={index} className="border border-gray-400 p-4 rounded-md bg-gray-50 flex flex-col">
              <div className='flex gap-5'>
                <img src={tablet.image} alt={tablet.name} className='w-30 h-30' />
                <div className='text-gray-600'>
                  <h2 className="text-xl font-bold text-gray-700">{tablet.name}</h2>
                  <p><strong>Brand:</strong> {tablet.brand}</p>
                  <p><strong>Use:</strong> {tablet.use}</p>
                  <p><strong>Strength:</strong> {tablet.strength}</p>
                  <p><strong>Price:</strong> Rs. {tablet.price}</p>
                </div>
              </div>

              <p className="text-sm text-gray-800 mt-2">{tablet.description}</p>

              <div className='bg-gray-400 w-fit p-1 cursor-pointer flex gap-5 rounded-full mt-4 items-center justify-center text-center'>
                <p
                  onClick={() => cartCountIncre(index)}
                  className='rounded-full w-8 h-8 bg-black/70 hover:bg-black text-xl text-white font-bold items-center text-center'
                >+</p>
                {
                  count===0?<></>:<p>{count}</p>
                }
                {count > 0 && (
                  <p
                    onClick={() => cartCountDecre(index)}
                    className='rounded-full w-8 h-8 bg-black/70 hover:bg-black text-xl text-white font-bold text-center'
                  >-</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllMedi;
