import React from 'react'
import {motion} from 'framer-motion'
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL
type Props = {
    directionLeft?:boolean,
    url:string,
    name:string
}

export default function SkillCard( props:Props ) {
  return (
    <div className='group reative flex cursor-pointer'>
        <motion.img
        initial={{
            opacity:0,
            x: props.directionLeft ? -100 : 100,
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        className='rounded-full border border-gray-500 object-cover w-14 md:w-20 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={`${localUrl}${props.url}`}
        ></motion.img>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 linear group-hover:bg-white h-14 w-14 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0'>
            <div className={'flex items-center justify-center h-full'}>
                <p className='text-[12px] md:text-sm xl:text-xl font-bold text-black opacity-100'>{props.name}</p>
            </div>
        </div>
    </div>
  )
}