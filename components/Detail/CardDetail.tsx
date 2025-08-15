// CardDetail.jsx
import Image from 'next/image'
import { FC } from 'react';
import ArrowD from '../shared/icon/ArrowD';
interface CardDetailPropType {
  image: string; 
  description: string; 
  hexText: string; 
}

const CardDetail:FC<CardDetailPropType> = ({ image, description, hexText }) => {
    return (
        <div className="CardDetail relative duration-150 hover:cursor-pointer
         group/card py-[1.5em] bg-white rounded-3xl w-full flex justify-between items-center flex-col">
            
            <div className="IMG w-auto flex justify-center items-center">
                <Image width={130} height={130} alt='' src={image} />
            </div>

            <div className="detail pb-7 w-[85%] mx-auto flex justify-center items-center">
                <p className='text-justify font-normal text-sm'>{description}</p>
            </div>

            <div className="hexagon duration-150 opacity-[0] translate-y-[100%] absolute pb-4 flex !justify-end items-center flex-col bottom-0
             group-hover/card:translate-y-[50%] group-hover/card:opacity-[1]">
                <div className="content flex flex-col justify-center items-center">
                    <p className='text-justify font-normal text-xs'>{hexText}</p>
                    <span className="arrow !mt-0">
             <ArrowD width={20} height={20} fill='black'/>           

                    </span>
                </div>
            </div>
        </div>
    )
}
export default CardDetail
