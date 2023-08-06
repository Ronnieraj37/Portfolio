import React from 'react'
const Experience = ({ title, description, duration, position, imglink }) => {
    return (
        <div className='hover:scale-[101%] hover:border hover:border-green-200 relative hover:bg-[#093247] flex flex-row text-white ml-8 my-6 items-center justify-around bg-[#0d405c] rounded-2xl w-[1150px] h-[190px]'>
            <img src={imglink} className='h-[150px] rounded-xl bg-white ' alt='cover' />
            <div className='flex-col flex items-center justify-around'>
                <p className='font-semibold text-xl'>{title} - {position}</p>
                <p className='text-center  h-[110px] mt-2 p-2 overflow-auto w-[500px]'>{description}</p>
            </div>
            <p className=''>{duration}</p>
        </div>
    )
}

export default Experience