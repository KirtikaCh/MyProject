import React from 'react'
import bgimg from './images/food2.jpeg'
const Banner = () => {
  return (
    <div>
        <section className='md:py-[200px] py-[50px] relative bg-no-repeat bg-cover' style={{backgroundImage:`url(${bgimg})`}}>
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000009c]"></div>
            <div className="container mx-auto z-50 relative px-8">
                <div className="text-center md:w-[60%] mx-auto text-white">
                <h2 className='text-4xl pb-2 font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, obcaecati.</h2>
                    <p className='text-[18px]'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur quod corporis doloremque nihil quae obcaecati repudiandae vel.</p>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Banner