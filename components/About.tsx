"use client";
import React, { useEffect, useState } from "react";
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL
import { motion } from "framer-motion";
import Lottie from 'lottie-react'
import useT from "./t";
import animationData from '../public/animation.json'

type Props = {
  title: string;
  text: string;
  icons:any;
  languages:any;
  locale:string
};

export default function About({ title, text, icons, languages, locale }: Props) {
  let [description, setDescription] = useState()
  useEffect(()=>{
    if(icons)setDescription(icons.map(el=>el.attributes.about.find(language=>language.locale === locale)))

  }, [icons, locale])

  
  return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="relative w-full p-0 h-screen rounded-md flex justify-center items-center" 
      >
        <div className="h-[90%] flex flex-col overflow-y-hidden justify-center items-center">
          <h3 className=" text-gray-500 mb-10 tracking-[20px] uppercase text-[12px] md:text-2xl text-center">
            {title}
          </h3>
          <div className='w-[50%]'>
      <Lottie animationData={animationData}/>
      </div>
          <div className="flex w-[100%] h-[80%] justify-center items-center flex-wrap">
            {description && icons?.map((icon:any, index:number)=>{
              return(
                <div key={index} className='min-w-[250px] w-[40%] flex-col gap-5 flex justify-center items-center'>
                <img className={"invert w-10 md:w-20"} src={`${icon.attributes.Icon.data.attributes.url}`} alt="iconImage" />
                <p className="px-4 text-center">{description[index].description}</p>
              </div>
              )
            })}
       
          </div>
        </div>
      </motion.div>
  );
}
