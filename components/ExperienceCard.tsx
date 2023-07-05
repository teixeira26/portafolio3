import React from 'react'
import {motion} from 'framer-motion'
import useT from './t'
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL

type Props = {
    title:string,
    companyName:string,
    startDate:string,
    endDate:string,
    summaryPoints:Array<string>
    icons:Array<any>,
    image:any,
    index:number,
    since:any
}

export default function ExperienceCard({title, since, companyName, startDate, endDate, summaryPoints, icons, image, index}: Props) {
  return (
    <article key={index} className=' py-3 flex flex-col rounded-lg xl:mt-0 md:mt-10 mt-8 items-center sm:space-y-4 space-y-1 flex-shrink-0 h-[500px] lg:h-auto w-[300px] md:w-[400px] lg:w-[500px] xl:w-[520px] snap-center bg-[#292929] p-1 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-x-hidden scrollbar scrollbar-track-gray-800/20 scrollbar-thumb-gray-400/20'>
        <motion.img 
        initial={
            {
                opacity:0,
                y:-100,
            }
        }
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center' src={`${image.url}`} alt='image'></motion.img>
        <div className='px-4 md:px:10 w-full'>
            <h4 className='text-2xl md:text-4xl font-light w-full'>{title}</h4>
            <p className='font-bold text-md md:text-2xl mt-1'>{companyName}</p>
            <div className='flex space-x-2 my-2'>
                {icons?.map((icon, index)=>{
                    return(
                        <img 
                        key={index}
                        alt='image'
                        className='h-10 w-10 rounded-full'
                        src={`${icon.attributes.url}`}></img>
                    )
                })}
            </div>
            <p className=' py-5 text-gray-300 '>{since.from} {startDate} - {since.to} {endDate ?? <span className=''>{since.present}</span>}</p>
        
            <ul className='list-disc space-y-4 ml-5   text-md'>
                {summaryPoints?.map((point, index)=> <li key={index}>{point}</li>)}
            </ul>
        </div>
    </article>
  )
}