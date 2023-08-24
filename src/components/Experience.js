import React from 'react'
const Experience = ({ title, description, duration, position, imglink }) => {
    return (
        <div className='hover:scale-[101%] hover:border hover:border-green-200 relative hover:bg-[#093247] ml-40  flex flex-col sm:flex-row text-white sm:ml-8 my-6 items-center justify-around bg-[#0d405c] rounded-2xl w-[400px] h-[210px] sm:w-[1150px] sm:h-[190px]'>
            <img src={imglink} className='h-[150px] hidden sm:flex rounded-xl bg-white ' alt='cover' />
            <div className='flex-col sm:text-base text-sm flex items-center justify-around'>
                <p className='font-semibold text-lg sm:text-xl'>{title} - {position}</p>
                <p className='text-center  h-[110px] mt-2 p-2 overflow-auto w-[350px] sm:w-[500px]'>{description}</p>
            </div>
            <p className=''>{duration}</p>
        </div>
    )
}

export default Experience