import { Swiper } from 'swiper/react';
import 'swiper/css';
interface SwiperComponentProps {
  spaceBetween?: number;
  slidesPerView?: number;
  onSlideChange?: () => void;
  onSwiper?: (swiper: any) => void;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
  children: React.ReactNode; 
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children, ...props }) => {
  return (
    <Swiper {...props} dir='rtl' className='overflow-hidden pb-[3em]'>
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
