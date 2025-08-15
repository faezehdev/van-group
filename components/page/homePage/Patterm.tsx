"use client"
import Image from 'next/image'


const Pattern = () => {
  return (
    <>
     
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
