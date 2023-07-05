'use client'
import { Dispatch, SetStateAction, useState } from 'react'



const useT = ()=>{
    const [locale, setLocale]:["es" | 'pt' | 'en', Dispatch<SetStateAction<any>>] = useState('es')
    const setT = (t:'es' | 'pt' | 'en')=>{
        setLocale(t === 'en' ? 'en' : t === 'es' ? 'es' : 'pt')
    }
    return { locale, setT, setLocale }
}

export default useT