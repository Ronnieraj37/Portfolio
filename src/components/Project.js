import React from 'react'
import { FiGithub } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";
const Project = ({ title, description, gitlink, vercel, imglink }) => {
    return (
        <div className='hover:scale-105 hover:bg-[#093247] hover:border-y-[1px] hover:border-lime-200  flex-col text-white ml-8 my-6 items-center justify-around bg-[#0d405c] rounded-2xl w-[350px] h-[390px] flex'>
            <img src={imglink} className='h-[150px] mt-2 rounded-xl bg-light-50 ' alt='cover' />
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-center overflow-auto h-[100px] w-[250px]'>{description}</p>
            <div className='flex flex-row w-[200px] mb-2 justify-around'>
                <a href={gitlink} rel="noopener noreferrer" target="_blank">
                    <FiGithub className='hover:scale-125 ' size={33} />
                </a>
                {vercel &&
                    <a href={vercel} rel="noopener noreferrer" target="_blank">
                        <RxVercelLogo className='hover:scale-125' size={33} />
                    </a>
                }
            </div>
        </div>
    )
}

export default Project