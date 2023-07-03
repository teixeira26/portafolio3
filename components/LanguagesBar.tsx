import React, { useEffect } from 'react'
import portugueseFlag from '../public/brazil-.png'
import spanishFlag from '../public/flag.png'
import ensglishFlag from '../public/united-kingdom.png'
import useT from './t'
type Props = {setT:any}

export default function LanguagesBar({setT}: Props) {

  return (
    <div className={'w-full h-[100dvh] fixed top-0 flex justify-center m-auto pointer-events-none z-50'}>
            <div className='max-w-7xl w-full flex flex-col justify-end items-start xl:flex-row xl:items-end xl:justify-start'>
                <div className='mr-[32px] mb-[32px] space-y-2 space-x-0 xl:space-x-2 xl:space-y-0'>
                <img draggable={false} onClick={()=>setT('pt')} className='pointer-events-auto w-10 block xl:inline saturate-0 hover:saturate-100 hover:scale-[1.2]' src={portugueseFlag.src} alt="portuguese" />
                <img draggable={false} onClick={()=>setT('es')} className='pointer-events-auto w-10 block xl:inline saturate-0 hover:saturate-100 hover:scale-[1.2]' src={spanishFlag.src} alt="spanish" />
                <img draggable={false} onClick={()=>setT('en')} className='pointer-events-auto w-10 block xl:inline saturate-0 hover:saturate-100 hover:scale-[1.2]'src={ensglishFlag.src} alt="english" />
                </div>
               
            </div>
    </div>
    
  )
}