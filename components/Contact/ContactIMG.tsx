import Image from 'next/image'
const ContactIMG = ()=>{
    return(
        <>
        <div className="Contact w-full flex justify-start items-center">
                    <div className="Img w-full flex justify-end items-center">
                            <Image width={482} height={427} alt=''src="/images/contact.png" />
                        </div>
            
        </div>
        </>
    )
}
export default ContactIMG