/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function About({ AboutRef }) {         
    return (
        <div ref={AboutRef} className=' px-10 w-full animate-[fadeIn_1s_forwards]  text-white pt-[2rem] max-sm:pt-0 flex flex-col max-md:px-5 '>
            <div className=' w-full  flex items-start max-md:flex-col '>
                <div className='w-[60%] max-md:w-[100%] text-left flex flex-col gap-10 z-1'>
                    <p className='text-[2.8rem] font-bold'>
                        <span className='text-[2.5rem] font-bold  border-b-8 border-b-p-300'>About</span> Me</p>
                    <p>
                        Welcome to my web portfolio! I'm Himanshu Singh Jani, a Front end developer. Over the past 2 years, I have dedicated myself to Web development.
                        <br />
                        <br />

                        As a front end developer, my tech stack is primarily based on JavaScript, which allows me to seamlessly work on  the front end applications. While my strength lies in front-end development, I am continuously enhance my skills and learn many morden framworks.

                    </p>
                </div>
                <div className='w-[30%] m-auto max-md:w-[60%] max-md:fixed max-md:left-[15%] max-md:opacity-30 z-0'>
                    <img loading='lazy' alt='not found' src="himanshujani.jpg" className='h-full object-contain border-2 p-2 '/>
                    
                </div>
            </div>
        </div >
    )
}
