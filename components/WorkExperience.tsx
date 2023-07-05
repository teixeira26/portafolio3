"use client"

import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import en from '../locales/en'
import es from '../locales/es'
import pt from '../locales/pt'


type Props = {
    sectionTitle:string
    experiences:Array<any>
    locale: string
}

export default function WorkExperience({sectionTitle, experiences, locale}: Props) {
    const locales = {
        en: en,
        es: es,
        pt: pt
    }
    console.log(en, locale)
  return (
    <motion.div
    initial={{  
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-rol max-w-full px-0 md:px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl ">{sectionTitle}</h3>
        <div className='w-full xl:mt-5 sm:mt-20 flex space-x-5 overflow-x-scroll scroll-smooth hover:scroll-auto p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-10 '>
            {
                experiences?.sort((x, y)=> x.attributes.order - y.attributes.order).map((experience, index)=>{ 
                    return <ExperienceCard since={locales[locale]} index={index} summaryPoints={experience.attributes.summaryPoints.points} image={experience.attributes.image.data[0].attributes} icons={experience.attributes.techSkillsIcons.data} key={index} title={experience.attributes.Title} companyName={experience.attributes.companyName} startDate={experience.attributes.startedDate} endDate={experience.attributes.FinishDate} />

                })
            }

        </div>
    </motion.div>
  )
}