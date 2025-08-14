"use client"
import { FC, useState } from "react"
import Link from "next/link"

interface SocialconPropType {
  Icon: React.ComponentType<{ width: number; height: number; fill?: string }>
  link: string
}

const Socialcon: FC<SocialconPropType> = ({ Icon, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
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
  )
}

export default Socialcon
