"use client"
import { FC, useState } from "react"
import Link from "next/link"
import Image from "next/image"
interface SocialconPropType {
  Icon: React.ComponentType<{ width: number; height: number; fill?: string }>
  link: string
}

const Socialcon: FC<SocialconPropType> = ({ Icon, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="social group/social relative">
   <span className="qr group-hover/social:opacity-[1] opacity-[0] duration-500 absolute top-[-3.5em] left-0 right-0 z-10">
   <Image
        width={62}
        height={77}
        className=""
        alt="Long pattern design"
        src="/images/qr.png"
      />
   </span>
   
      <Link
        href={link}
        className="Social w-[40px] h-[40px] duration-100 hover:bg-black bg-[#F5F5F5] flex justify-center items-center rounded-full cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon width={18} height={18} fill={hovered ? "white" : "black"} />
      </Link>
    </div>
  )
}

export default Socialcon
