// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default () => {
  return (
    <Swiper
      spaceBetween={3}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true} modules={[Navigation]} className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random=1" className='h-200' alt='random 1'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://picsum.photos/200/300?random=2" className='h-200' alt='random 1'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://picsum.photos/200/300?random=2" className='h-200' alt='random 1'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://picsum.photos/200/300?random=2" className='h-200' alt='random 1'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://picsum.photos/200/300?random=2" className='h-200' alt='random 1'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://picsum.photos/200/300?random=2" className='h-200' alt='random 1'/>
      </SwiperSlide>
    </Swiper>
  );
};