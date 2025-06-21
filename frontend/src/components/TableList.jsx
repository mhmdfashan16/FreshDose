import React from 'react';
import tablets, { tabletCategories } from '../assets/tablets';
import { useStoreContext } from '../context/StoreContext';
import { Routes,Route, useNavigate } from 'react-router';


const TabletList = () => {

  const navigate = useNavigate();
 

  return (
    <div className=" pl-20 pr-20 mt-10 bg-white rounded-md space-y-4 ">
       <h1 className='text-2xl font-bold '>Categories of Tablets</h1>
        <div className='flex mt-10'>
          {
           tabletCategories.map((tablet, index)=>(
          <div className='flex flex-col items-center text-center rounded-full w-40 cursor-pointer' key={index}
          onClick={() => {
              // navigate(`tablets/${tablet.category.toLowerCase().replace(/\s+/g, '-')}`);
              scrollTo(0,0);
          }            
          }           
          >
            <img src={tablet.image} alt="" className='w-20 h-20 rounded-xl border-2 border-gray-400'/>
            <p className='text-sm mt-3 text-gray-800 font-semibold'>{tablet.category}</p>
          </div>
          
        ))
      }
        </div>

      
    </div>
  );
};

export default TabletList;

