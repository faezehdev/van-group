"use client"
import Image from 'next/image'
import Socialcon from '../../Contact/Socialcon'
import PhoneIcon from '../../shared/icon/PhoneIcon'
import TelegramIcon from '../../shared/icon/TelegramIcon'
import WhatsApp from '../../shared/icon/WhatsApp'
import MessageIcon from '../../shared/icon/MessageIcon'
import TwitterIcon from '../../shared/icon/TwitterIcon'
import InstaIcon from '../../shared/icon/InstaIcon'
const icons = [
  { icon: WhatsApp, link: "https://wa.me/..." },
  { icon: TelegramIcon, link: "https://t.me/..." },
  { icon: PhoneIcon, link: "tel:+123456789" },
  { icon: MessageIcon, link: "/contact" },
  { icon: TwitterIcon, link: "https://twitter.com/..." },
  { icon: InstaIcon, link: "https://instagram.com/..." }
];


const Pattern = () => {
  return (
    <>
      <div className="Socials mt-[3em] w-[90%] mx-auto flex lg:justify-end justify-center items-center gap-4">
       {icons.map(({ icon, link }, idx) => (
          <Socialcon key={idx} link={link} Icon={icon} />
        ))}
      </div>
      <div className="Pattern w-[90%] relative mx-auto flex justify-center">
        <Image
          width={482}
          height={427}
          className="w-full object-cover"
          alt="Long pattern design"
          src="/images/longPattern.png"
        />
      </div>
    </>
  )
}

export default Pattern
