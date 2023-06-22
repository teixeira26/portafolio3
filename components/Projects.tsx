'use client'

import React from "react";
import responsiveImg from '../public/responsive.png'
import {motion} from 'framer-motion'
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL
type Props = {
  sectionTitle:string,
  projects:Array<any>
};

export default function Projects({sectionTitle, projects}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    className="h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl ">
        {sectionTitle}
      </h3>
        <div className='relative h-[100%] w-[100%] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects?.map((project, index)=>{
              return(
                <div key={index} className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <img
                src={`${project.attributes.image.data[0].attributes.url}`}
                className="w-[60%]"/>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className=" text-xl md:text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50 ">Proyecto 1 de 4:</span> {project.attributes.title}</h4>
                </div>
                <p className="text-sm md:text-ls text-center">{project.attributes.description}</p>
              </div>
              )
            })}
            
        </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
