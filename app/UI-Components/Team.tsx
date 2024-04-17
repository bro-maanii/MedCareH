"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Team_Cards from './Team_Cards';

export default function Team() {
  return (
    <>
    <div className='flex flex-col justify-center items-center py-9 pt-16'>
        <h1 className='text-4xl text-center font-bold'>We Have Specialist Doctors To Solve Your Problems</h1>
        <p className='flex text-sm font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus placeat! </p>
    </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation,Pagination]}
        className="mySwiper pb-8"      
      >
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
        <SwiperSlide><Team_Cards/></SwiperSlide>
      </Swiper>
    </>
  );
}

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
