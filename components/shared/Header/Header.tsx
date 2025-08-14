"use client"
import React from 'react'
import ToggleLangs from './ToggleLangs'
import Image from 'next/image'
import Nav from './Nav'
import { useDetectSize } from '@/hooks/shared/useDetectSize'
import MobileNav from './MobileNav'
export default function Header() {
  
  const { breakpoint } = useDetectSize()
    if (!breakpoint) return null
  return (
    <header className="header py-4 fixed top-0 left-0 right-0 items-center z-50 w-90 mx-auto flex justify-between ">
      <div className="logo w-auto flex justify-center items-center">
        <Image width={64} height={48} alt='' src='/images/logo.png' />
      </div>
      {
       breakpoint &&  breakpoint !== 'sm' && breakpoint !== 'xs' ?
          (
            <>
              <Nav />
              <ToggleLangs />
            </>

          ) :(
            <MobileNav/>
          )
      }
    </header>
  )
}
