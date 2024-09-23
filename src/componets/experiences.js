/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import JourneyBar from './experienceJourneyPath'
// import { JOBS } from './Constants'
import Skills from './skills'

export default function Experiences({ ExperienceRef }) {
    return (
        <div ref={ExperienceRef} className='px-10 max-sm:px-5 animate-[fadeIn_1s_forwards] transition-all  flex flex-col gap-20 max-sm:gap-10 pt-[2rem] max-sm:pt-0 overflow-y-scroll' >
            <div className='flex max-md:flex-col max-sm:gap-[50px] justify-between'>
                <Skills /> 

            </div> 


        </div >
    )
}
