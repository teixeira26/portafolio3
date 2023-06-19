"use client"

import React from 'react'
import {motion} from 'framer-motion'
import SkillCard from './SkillCard'

type Props = {
  title:string,
  subtitle:string,
  images:any,
}

export default function Skills({title, subtitle, images}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className='justify-center xl:space-y-0 mx-auto items-center flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen'>
        <div className='absolute flex justify-center top-0 w-full '>
          <h3 className='absolute text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl'>{title}</h3>
          <h3 className='absolute top-24 md:top-32 uppercase tracking-[3px] text-gray-500 text-sm'>{subtitle}</h3>
        </div>
        
        <div className='mt-12 grid grid-cols-3 gap-5'>
          {images?.data.map((image, index)=>{
              if(index < 3 || (index > 5 && index < 9) )return <SkillCard url={image.attributes.Image.data.attributes.url} name={image.attributes.Name} key={index}/>
              else return <SkillCard directionLeft={true} url={image.attributes.Image.data.attributes.url} name={image.attributes.Name} key={index} />
            
          })}
        </div>
    </motion.div>
  )
}