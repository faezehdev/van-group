"use client"
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
const SignSection = ()=>{
    const bottomRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    if (bottomRef.current) {
      gsap.fromTo(
        bottomRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 80%", 
            toggleActions: "play none none none", 
          },
        }
      );}

  }, []);
    return(
        <>
        <div className="Sign-container overflow-hidden w-90 mx-auto flex justify-center lg:min-h-[140px]
             items-center py-7 bg-graylight relative rounded-3xl">
              <div className="overlay absolute flex gap-2 w-full bottom-[-5%] right-5 z-10">
                
                <Image width={178} height={178} alt='' src='/images/Polygon.png' />
                <Image width={178} height={178} className="translate-y-[2em]" alt='' src='/images/Polygon.png' />
              </div>
              <div ref={bottomRef} className="box w-90 mx-auto lg:w-full lg:text-center lg:max-w-[794px]">
                <p>
                  ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و افزودن ارزشی به جهان امروز ؛ چرا که باور داریم: «فردا، فرزند امروز است.»
                </p>
              </div>
            </div>
        </>
    )
}
export default SignSection