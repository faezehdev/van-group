
import Link from 'next/link'
import React from 'react'


interface FooterNavPropItems{
 items:{
    label:string,
    href:string
 }[]
}
export default function FooterNav({ items }: FooterNavPropItems) {
  return (
    <nav className="footer_menu w-full flex justify-start items-center gap-2">
      <ul className="menu w-full justify-start items-start flex gap-1 flex-col">
        {items.map(({ label, href }) => (
          <li key={label} className="menu_item">
            <Link href={href} className="font-normal text-sm text-black">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
