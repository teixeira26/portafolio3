
import { useState } from 'react'
import en from '../locales/en'
import es from '../locales/es'
import pt from '../locales/pt'

const useT = ()=>{

    const [locale, setLocale] = useState(navigator.language.split('-')[0])
    let t = locale === 'en' ? en : locale === 'es' ? es : pt

    return { t, setLocale }
}

export default useT