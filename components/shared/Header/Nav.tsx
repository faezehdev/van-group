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
    
    <nav className="header_menu w-max flex max-w-full justify-center items-center gap-2">
      <ul className="menu w-full flex max-w-full justify-center items-center gap-8">
        {menuItems.map(({ label, href }) => (
          <li key={label} className="menu_item">
            <Link href={href} className="font-normal text-base text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
