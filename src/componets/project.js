import React from 'react'

export default function Project({ project }) {
    return (
        <div
            className='flex flex-col animate-[topToBottomSlide_1.5s_forwards] w-[18rem] h-[30rem] text-white bg-gray rounded-lg  border p-1'
        >
            <img src={project.image} className='w-full  h-[10rem] rounded-lg bg-white ' />
            <div className='p-5 flex flex-col gap-3 border-t'>
                <p className='text-[1.2rem]'>{project.title}</p>
                <p className='text-[0.8rem]'>{project.description}</p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 px-5'>
                {
                    project.skills.map((skill) => {
                        return (
                            <p key={skill.label} className='rounded-xl text-[0.9rem] text-p-300 font-semibold bg-slate-200 px-2  py-1' >{skill}</p>
                        )
                    })
                }
            </div>

            <a  className="pt-3"href={project.projectLink}> Link= {project.projectLink}</a>
        </div>
    )
}
