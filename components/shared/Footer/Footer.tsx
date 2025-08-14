import SocialsFooter from "./SocialsFooter"
import MenuFooter from "./MenuFooter"
import CopyRight from "./CopyRight"
const menuItems = [
  { label: 'درباره ما', href: '#' },
  { label: 'وبلاگ', href: '#' },
  { label: 'معرفی شرکت ها', href: '#' },
  { label: 'تماس با ما', href: '#' },
  { label: 'موقعیت های شغلی', href: '#' },
]

const linksGroups = [
  [
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
  ],
  [
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
  ],
  [
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
    { label: "www.link.com", href: "http://www.link.com" },
  ]
]

const Footer = () => {
  return (
    <div className="footer mb-[3em] w-full flex justify-center items-center">
      <div className="inner w-90 mx-auto flex flex-col">
        <SocialsFooter />
        <div className="Bootom mt-[4em] w-full grid lg:grid-cols-4 grid-cols-1 justify-start items-start gap-4">
          <MenuFooter items={menuItems} title="دسترسی سریع" />
          {linksGroups.map((links, idx) => (
            <MenuFooter key={idx} items={links} title="لینک ها" />
          ))}
        </div>
        <CopyRight/>
      </div>
    </div>
  )
}

export default Footer
