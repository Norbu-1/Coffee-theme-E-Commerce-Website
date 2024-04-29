import React, { useState } from 'react'

const Blog = ({item}) => {
 
console.log(item);
  return (
    <div className='w-full mx-auto '>
    <div className='w-[90%] mx-auto md:flex bg-yellow-300 mb-6 pb-0.5'>
            <div className=''>
<img src={item.image} className='w-[24rem] h-full' alt="" />
            </div>
            <div className='w-[80%]  md:w-[50%] m-10 md:pl-20'>
                <h1 className='text-4xl font-bold font-serif'>Title</h1>
              <h1 className='text-xl font-semibold mb-10'>- {item.title}</h1>
              <p className='text-xl font-semibold mb-10'>
                <p className='text-4xl font-bold font-serif'>Description</p>- {item.description}</p>
              <p className='text-xl font-semibold mb-10'>
              <p className='text-4xl font-bold font-serif pb-1 '>Ingredients</p>  {item.ingredients.map(it=>{
                return <div>
           <p>- {it}</p>
                </div>
              })}</p>
            </div>
        </div>
    </div>
  )
}

export default Blog