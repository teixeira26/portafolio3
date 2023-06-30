"use client";
import React from "react";
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from 'lottie-react'
import login from "../public/login.png";
import heart from "../public/heart.png";
import quality from "../public/quality.png";
import responsive from "../public/educational-programs.png";
import animationData from '../public/animation.json'
import AboutImage from "./AboutImage";

type Props = {
  title: string;
  text: string;
  icons:any;
};

export default function About({ title, text, icons }: Props) {
  console.log(icons)
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
            {icons?.map((icon:any, index:number)=>{
              return(
                <div key={index} className='min-w-[250px] w-[40%] flex-col gap-5 flex justify-center items-center'>
                <img className={"invert w-10 md:w-20"} src={`${icon.attributes.Icon.data.attributes.url}`} alt="iconImage" />
                <p className="px-4 text-center">{icon.attributes.description}</p>
              </div>
              )
            })}
       
          </div>
        </div>
      </motion.div>
  );
}
