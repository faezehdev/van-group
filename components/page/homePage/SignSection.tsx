import Image from 'next/image'
const SignSection = ()=>{
    return(
        <>
        <div className="Sign-container w-90 mx-auto flex justify-center lg:min-h-[140px]
             items-center py-7 bg-graylight relative rounded-3xl">
              <div className="overlay absolute flex gap-2 w-full bottom-[-5%] right-5 z-10">
                
                <Image width={178} height={178} alt='' src='/images/Polygon.png' />
                <Image width={178} height={178} className="translate-y-[2em]" alt='' src='/images/Polygon.png' />
              </div>
              <div className="box w-90 mx-auto lg:w-full">
                <p>
                  ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و افزودن ارزشی به جهان امروز ؛ چرا که باور داریم: «فردا، فرزند امروز است.»
                </p>
              </div>
            </div>
        </>
    )
}
export default SignSection