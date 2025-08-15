"use client"
import React, { useEffect, useRef } from 'react'
import PlayIcon from '../../shared/icon/PlayIcon'
import gsap from "gsap";

export default function HeroSection() {
const SectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (SectionRef.current) {
      gsap.fromTo(
        SectionRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" } 
      );
    }
  }, [])
  return (
    <div ref={SectionRef} className='bg-foreground flex justify-center items-center min-h-screen'>
      <span className="PlayIcon">
        <PlayIcon width={80} height={80}/>
      </span>
    </div>
  )
}
