import Image from 'next/image'
import Socialcon from './Socialcon'
import PhoneIcon from '../shared/icon/PhoneIcon'
import TelegramIcon from '../shared/icon/TelegramIcon'
import WhatsApp from '../shared/icon/WhatsApp'
import MessageIcon from '../shared/icon/MessageIcon'
import TwitterIcon from '../shared/icon/TwitterIcon'
import InstaIcon from '../shared/icon/InstaIcon'
const icons = [
  { icon: WhatsApp, link: "https://wa.me/..." },
  { icon: TelegramIcon, link: "https://t.me/..." },
  { icon: PhoneIcon, link: "tel:+123456789" },
  { icon: MessageIcon, link: "/contact" },
  { icon: TwitterIcon, link: "https://twitter.com/..." },
  { icon: InstaIcon, link: "https://instagram.com/..." }
];

const ContactIMG = ()=>{
    return(
        <>
        <div className="Contact w-full flex flex-col justify-end items-center">
                    <div className="Img mb-[4em] w-full flex justify-end items-center">
                            <Image width={482} height={327} className='w-[400px]' alt=''src="/images/contact.png" />
                        </div>
              <div className="Socials w-[90%] mx-auto flex lg:justify-end justify-center items-center gap-4">
       {icons.map(({ icon, link }, idx) => (
          <Socialcon key={idx} link={link} Icon={icon} />
        ))}
      </div>
        </div>
        </>
    )
}
export default ContactIMG