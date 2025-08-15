"use client"
import DivContainer from "../../Layout/DivContainer"
import Image from 'next/image'
import BigTitle from "../../shared/common/BigTitle"
import { FC, useEffect, useRef } from "react"
import Category from "../../category/Category"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface CategorySectionPropType {
  [key: number]: string; 
}

const CategorySection: FC<CategorySectionPropType> = (props) => {
  const categories = Object.values(props); 
     const CatRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    if (CatRef.current) {
      gsap.fromTo(
        CatRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: CatRef.current,
            start: "top 80%", 
            toggleActions: "play none none none", 
          },
        }
      );
   
    }
  }, []);
  return (
  <>
    <span className="overlay absolute left-0 bottom-0 translate-y-[66px] my-auto flex justify-center items-center top-0 z-0">
        <Image width={350} height={497} className="h-full object-contain" alt='' src='/images/pattern.png' />
      </span>
         <DivContainer as={'section'} className="relative w-full">
    
      <BigTitle
        signture="ONE GROUP"
        category="دسته‌بندی شرکت ها"
      >
        <h2>جمله کوتاه یا یک تایتل</h2>
      </BigTitle>
      <div ref={CatRef}  className="Categories_container mt-[2em] grid lg:grid-cols-5 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4 lg:gap-6">
        {categories.map((cat, index) => (
          <Category key={index} category={cat} />
        ))}
      </div>
    </DivContainer>
  </>
 
  )
}

export default CategorySection
