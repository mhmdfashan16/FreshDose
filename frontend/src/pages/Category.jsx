import React from 'react'
import tablets from '../assets/tablets'

const Category = () => {
  return (
    <div>
        
        <h1>Category</h1>
        
      <div>
        {
            tablets.map((tablet, index)=>(
                <div key={index}>

                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category
