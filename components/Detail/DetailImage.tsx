import Image from 'next/image'
const DetailImage = () => {
    return (
        <>
            <div className="Img  hidden lg:flex justify-start items-center">
                <Image width={272} height={993} alt='' className="w-full object-cover" src="/images/tower.png" />
            </div>
        </>
    )
}
export default DetailImage