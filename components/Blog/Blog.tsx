"use client"
import { FC, useState } from "react";
import Image from 'next/image'
import ArrowRightIcon from "../shared/icon/ArrowRightIcon";
import CalenderIcon from "../shared/icon/CalenderIcon";
interface BlogPropType {
    description?: string;
    title: string;
    date?: string;
    tags?: string[]
    img?: string
    imgHorizontal?: string
    variant?: "two" | "three";
}
const Blog: FC<BlogPropType> = ({ title, tags, description, date, img , variant , imgHorizontal }) => {
    const [hovered, setHovered] = useState(false);
    if (variant == "two") return(
   <>
            <div className="Blog group/blog  hover:cursor-pointer bg-graylight duration-200
             hover:bg-black1 relative py-3.5 px-3 pr-5 flex justify-between rounded-3xl items-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <span className={`OV ${hovered ? 'to-dark' : 'to-light '} absolute
                 w-full left-0 right-0 top-0 rounded-3xl h-full z-[1] `}></span>
                <span className="icon ml-5 absolute z-[1] w-[40px] h-[40px] left-1
                  bottom-5
                   flex justify-center items-center bg-white rounded-[12px]">
                    <ArrowRightIcon fill="black" width={19} height={16} />
                </span>
                <div className="Detail relative z-10 gap-2.5 max-w-[320px] flex flex-col flex-wrap">
                    <div className="Tags w-auto mb-3 max-w-full flex gap-2">
                        {tags?.length != 0 && (
                            tags?.map((tag) => (
                                <span className="Tag w-max font-normal text-[10px] rounded-[10px]
                                duration-200
                                group-hover/blog:text-black
                                 text-black py-2 px-3 bg-white">
                                    {tag}
                                </span>
                            ))
                        )

                        }

                    </div>
                    <div className="Desc w-auto flex flex-col gap-2">
                        <div className="title w-auto flex justify-start
                         duration-200
                      text-black
                         items-center font-semibold text-lg group-hover/blog:text-white">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="text w-auto flex justify-start items-center 
                        duration-200
                      text-black
                        font-normal text-justify text-sm group-hover/blog:text-white">
                            <p>
                                {description}
                            </p>
                        </div>
                        <span className="Date-c justify-start mt-5 items-center w-auto flex gap-2">
                            <span className="Icon">
                                {
                                    hovered ? (
                                        <CalenderIcon fill="white" width={15} height={15}/>
                                    ):
                                    (
                                        <CalenderIcon fill="black" width={15} height={15}/>
                                    )
                                }
                                
                              
                                </span>
                            <span className="Date font-normal text-[10px] rounded-[10px]
                            duration-200
                     text-black
                             group-hover/blog:text-white">
                                {date}
                            </span>
                        </span>
                    </div>
                </div>
                <div className="Img w-auto z-[0] rounded-3xl flex justify-center items-center">
                    <Image width={242} height={232} alt='' className="rounded-3xl" src={`${img}`} />
                </div>

            </div>
        </>
    )
    if (variant == "three") return(
<>
   <> 
            <div className="Blog group/blog w-full hover:cursor-pointer bg-graylight duration-200
             hover:bg-black1 relative py-3.5 px-3 pr-5 flex flex-col justify-between rounded-3xl items-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                  <span className={`OV ${hovered ? 'to-dark' : 'to-light '} absolute
                 w-full left-0 right-0 top-0 rounded-3xl h-full z-[1] `}></span>
                <span className="icon ml-5 absolute z-[1] w-[40px] h-[40px] left-1
                  bottom-5
                   flex justify-center items-center bg-white rounded-[12px]">
                    <ArrowRightIcon fill="black" width={19} height={16} />
                </span>
                <div className="Detail relative z-10 gap-2.5 w-full flex justify-between items-center">
                    <div className="Tags w-auto max-w-[50%] mb-3  flex-wrap flex gap-2">
                        {tags?.length != 0 && (
                            tags?.map((tag) => (
                                <span className="Tag w-max font-normal text-[10px] rounded-[10px]
                                duration-200
                                group-hover/blog:text-black
                                 text-black py-2 px-3 bg-white">
                                    {tag}
                                </span>
                            ))
                        )

                        }

                    </div>
                    <div className="Desc w-auto flex justify-center items-center flex-col gap-2">
                        <span className="Date-c justify-start items-center w-auto flex gap-2">
                                 {
                                    hovered ? (
                                        <CalenderIcon fill="white" width={15} height={15}/>
                                    ):
                                    (
                                        <CalenderIcon fill="black" width={15} height={15}/>
                                    )
                                }
                                
                            <span className="Date font-normal text-[10px] rounded-[10px]
                            duration-200
                      text-black
                             group-hover/blog:text-white">
                                {date}
                            </span>
                        </span>
                    </div>
                </div>
                  <div className="title relative z-10 w-auto ml-auto flex justify-start
                         duration-200
                      text-black
                         items-center font-semibold text-lg group-hover/blog:text-white">
                            <p>
                                {title}
                            </p>
                        </div>
                <div className="Img w-full mt-2  z-[0] rounded-3xl flex justify-center items-center">
                    <Image width={242} height={232} alt='' className="w-full rounded-3xl object-cover" src={`${imgHorizontal}`} />
                </div>

            </div>
        </>
</>
    )
 
}
export default Blog