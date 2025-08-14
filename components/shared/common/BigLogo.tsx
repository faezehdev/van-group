
import Image from 'next/image'
import { FC } from 'react'
interface BigLogoPropType{
    src:string
    title:string
}
const BigLogo:FC<BigLogoPropType> = ({src,title})=>{
   return(
    <>
       <div className="BigLogo lg:translate-y-[-100%] translate-y-[-50%] w-90 mx-auto flex justify-center">
          <Image width={196} height={147} className='' alt={title} src={`${src}`} />
            </div>
    </>
   )
}
export default BigLogo