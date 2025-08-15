
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import DetailImage from "../../Detail/DetailImage";
import InnerScrollSection from "../../Detail/InnerScrollSection";

const DetailSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && textRef.current) {
          gsap.fromTo(
        imageRef.current,
        {  x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 50%", 
            toggleActions: "play none none none", 
          },
        }
      );
        gsap.fromTo(
        textRef.current,
        {  x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 50%", 
            toggleActions: "play none none none", 
          },
        }
      );

    }
  }, []);

  return (
    <div className="w-[95%] gap-[4em] flex lg:flex-row flex-col mx-auto">
      <div ref={imageRef} className="lg:w-[10%] lg:min-w-[200px] xl:min-w-[300px]">
        <DetailImage />
      </div>
      <div ref={textRef} className="lg:!w-auto lg:!max-w-[73%]">
        <InnerScrollSection />
      </div>
    </div>
  );
};

export default DetailSection;
