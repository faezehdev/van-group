import Link from 'next/link'
import React from 'react'

const menuItems = [
  { label: 'درباره ما', href: '#' },
  { label: 'وبلاگ', href: '#' },
  { label: 'معرفی شرکت ها', href: '#' },
  { label: 'تماس با ما', href: '#' },
  { label: 'موقعیت های شغلی', href: '#' },
]

export default function Nav() {
  return (
    
    <nav className="header_menu lg:w-max w-full sm:flex-row flex-col flex max-w-full justify-center items-center gap-2">
      <ul className="menu w-full flex sm:flex-row flex-col max-w-full justify-center items-center gap-8">
        {menuItems.map(({ label, href }) => (
          <li key={label} className="menu_item">
            <Link href={href} className="font-normal text-base lg:text-white text-black">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
