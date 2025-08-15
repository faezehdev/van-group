
"use client"
import DivContainer from "../../Layout/DivContainer";
import Image from 'next/image'
import BigTitle from "../../shared/common/BigTitle";
import Blog from "../../Blog/Blog";
import ArrowRightIcon from "../../shared/icon/ArrowRightIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const BlogSection = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    leftRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    rightRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    bottomRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);


  const addToLeftRefs = (el: HTMLDivElement) => {
    if (el && !leftRefs.current.includes(el)) leftRefs.current.push(el);
  };
  const addToRightRefs = (el: HTMLDivElement) => {
    if (el && !rightRefs.current.includes(el)) rightRefs.current.push(el);
  };
  const addToBottomRefs = (el: HTMLDivElement) => {
    if (el && !bottomRefs.current.includes(el)) bottomRefs.current.push(el);
  };

    const blogs = [
        {
            title: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه...",
            date: "24 فروردین 1404",
            tags: ["گردشگری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه...",
            date: "25 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  ",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه...",
            date: "26 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه...",
            date: "27 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
    ];

    return (
        <DivContainer as={'section'} className="relative">

            <BigTitle signture="ONE GROUP" category=" وبلاگ">
                <h2>جمله کوتاه یا یک تایتل</h2>
            </BigTitle>

            <div className="lg:flex hidden flex-col lg:flex-row gap-4 mt-[2em] justify-center">
                {blogs.slice(0, 2).map((blog, idx) => (
                    <div
                        key={idx}
                           ref={idx === 0 ? addToRightRefs : addToLeftRefs}
                        className="lg:w-[50%] w-full"
                    >
                        <Blog
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={blog.tags}
                            img={blog.img}
                            imgHorizontal={blog.imgHorizontal}
                            variant="two"
                        />
                    </div>
                ))}
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4 w-full justify-center">

                {blogs.slice(2, 4).map((blog, idx) => (
                    <div 
                     key={idx}
                       ref={idx === 0 ? addToRightRefs : addToBottomRefs}
                     className="w-full">
                        <Blog
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={blog.tags}
                            img={blog.img}
                            imgHorizontal={blog.imgHorizontal}
                            variant="three"
                        />
                    </div>
                ))}


                <div ref={addToLeftRefs} className="flex group/btn flex-col items-center justify-center bg-graylight hover:bg-black1 p-9 gap-8
                 rounded-3xl cursor-pointer duration-200">

                    <div className="det w-full flex justify-between items-center">
                        <h3 className="group-hover/btn:text-white text-lg flex flex-col font-semibold text-black">مشاهده اخبار
                            <p>  و مقالات بیشتر

                            </p>   </h3>

                        <span className="icon  w-[64px] h-[64px] 
                                           flex justify-center items-center bg-white rounded-[12px]">
                            <ArrowRightIcon fill="black" width={30} height={30} />
                        </span>


                    </div>
                    <Image
                        src="/images/moreblog.png"
                        alt="مشاهده اخبار بیشتر"
                        width={200}
                        height={150}
                        className="w-full rounded-[10px]"
                    />
                </div>
            </div>
        </DivContainer>
    )
}

export default BlogSection;
