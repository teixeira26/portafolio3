'use client'
import { useState } from 'react'
import en from '../locales/en'
import es from '../locales/es'
import pt from '../locales/pt'

const useT = ()=>{
    const [locale, setLocale] = useState('es')
    const setT = (t:string)=>{
        setLocale(t === 'en' ? 'en' : t === 'es' ? 'es' : 'pt')
    }
    return { locale, setT, setLocale }
}

export default useT