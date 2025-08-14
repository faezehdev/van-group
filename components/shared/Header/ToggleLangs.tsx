"use client"
import React, { useEffect, useRef, useState } from 'react'
import ArrowDown from '../icon/ArrowDown'
type LangCode = 'fa' | 'en' | 'tr' | 'ru' | 'ar' | 'de'
const languages = [
    { code: 'fa', label: 'فارسی', short: 'فا' },
    { code: 'en', label: 'انگلیسی', short: 'En' },
    { code: 'tr', label: 'ترکی', short: 'Tr' },
    { code: 'ru', label: 'روسی', short: 'Ru' },
    { code: 'ar', label: 'عربی', short: 'Ar' },
    { code: 'de', label: 'آلمانی', short: 'De' },
] as const satisfies { code: LangCode; label: string; short: string }[]

export default function ToggleLangs() {

    const [language, setLanguage] = useState<LangCode>('fa')
    const [menuOpen, setMenuOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const changeLanguage = (lang: LangCode) => {
        setLanguage(lang)
        setMenuOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [menuOpen])

    const activeLang = languages.find(l => l.code === language)
    return (
        <div
            ref={menuRef}
            onClick={toggleMenu}
            className={`language_toggle gap-2 mb-[3em] sm:mb-[0] flex flex-col sm:w-max w-full  overflow-visible border-[1px]
                 border-[#5D5D5D] sm:border-[transparent]
                 relative ${menuOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
        >
            <div
                className={`active_lang w-full bg-graylight  group/activelang  hover:bg-[#5D5D5D] duration-200
             hover:cursor-pointer sm:px-6 !pl-[2.4em] py-1 flex gap-2.5 justify-between
              ${menuOpen ? 'rounded-t-xl border-b-[1px] border-b-[#E1E1E1]' : 'rounded-xl'}`}
            >
                <span className="lang font-normal pr-6 sm:p-0 group-hover/activelang:text-white duration-200 text-base text-black">
                    {activeLang?.short ?? 'فا'}
                </span>
                <div className="icons relative ">
                    <span className={`absolute opacity-[1] duration-100 group-hover/activelang:opacity-[0] left-0 right-0
     top-0 bottom-0 arrow ${menuOpen ? 'rotate-180 left-[-20px] !my-[0]' : '!my-[0]'}`}>
                        <ArrowDown width={20} height={20} fill='black' />
                    </span>
                    <span className={`absolute opacity-[0] duration-100 group-hover/activelang:opacity-[1] 
            left-0 right-0 top-0 bottom-0 arrow ${menuOpen ? 'rotate-180 left-[-20px] !my-[0]' : '!my-[0]'}`}>
                        <ArrowDown width={20} height={20} fill='white' />
                    </span>
                </div>

            </div>

            {menuOpen && (
                <div className="langs_menu flex absolute top-[2em] bg-white flex-col rounded-b-xl left-0 right-0 w-full z-10">
                    {languages.map(({ code, label }) => (
                        <span
                            key={code}
                            onClick={() => changeLanguage(code)}
                            className={`item px-2 w-full hover:bg-[#F5F5F5] hover:cursor-pointer
                duration-150 flex justify-between py-1.5 font-normal text-base
                ${language === code ? 'bg-[#F5F5F5]' : ''}
                ${code === languages[languages.length - 1].code ? 'rounded-b-xl' : ''}
              `}
                        >
                            <span className="short text-base">   {code}</span>
                            <span className="long text-xs">   {label}</span>

                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}