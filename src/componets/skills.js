import React from 'react'
import { SKILLS } from './Constants'

export default function Skills() {


    function SkillRow(skill) {
        return (
        <div className='flex flex-row text-white gap-2 w-full'>
            <p className='w-[30%] text-xl overflow-hidden whitespace-normal truncate text-ellipsis'>{skill}</p>
           
        </div>)
    }
    return (
        <div className='w-[40%]  max-md:w-[100%] flex flex-col gap-10'>
            <p className='text-[5rem]  text-white font-bold text-left pr-4 border-b-8 border-b-p-300 w-fit'>Skills</p>
            <div className=' flex flex-row flex-wrap gap-4 mt-10 h-fit text-left '>
                {
                    SKILLS.map((exp)=>{
                        return SkillRow(exp)
                    })
                }
             
            </div>
        </div>
    )
}
