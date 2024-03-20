import React from 'react'
import cardimg from './images/cardimg.jpeg'
const Card = () => {
  return (
    <>
        <div className='w-[400px] border border-red-100 rounded-xl overflow-hidden'>
            <div className='h-[250px] overflow-hidden'>
                <img src={cardimg} className='w-full h-full hover:scale-110 duration-500 object-cover' alt="cardimg" />
            </div>
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-[16px] pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quos?</p>
                <div className='flex gap-4'>
                    <select>
                        <option value="">Half</option>
                        <option value="">Full</option>
                    </select>
                    <b>₹130</b>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card