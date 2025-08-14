"use client"
import CardDetail from "./CardDetail"
import SwiperComponent from "../Swiper/SwiperComponent"
import { SwiperSlide } from "swiper/react"
import { FC } from "react"
interface cardPropType{
    cardsData:{
          image:string,
      description: string
      hexText: string
    }[]
}
const Cards:FC<cardPropType> = ({cardsData}) => {
   const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div className="Cards-container mt-5  w-90 mx-auto max-w-[90%]">
      <SwiperComponent spaceBetween={50} slidesPerView={3} breakpoints={breakpoints}>
        {cardsData.map((item, idx) => (
          <SwiperSlide key={idx}>          
            <CardDetail
              image={item.image}
              description={item.description}
              hexText={item.hexText}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Cards;
