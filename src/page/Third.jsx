// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Third = () => {
    return (

        <div>
            <div className='lg:flex'>
                <div className='lg:ml-12 store'>
                    <h1 className='text-3xl'>Store locator</h1>
                    <p className='mt-9'>Our consultants are available to host you in- <br /> store and provide tailored guidance <br /> on gift purchases.
                        Find a nearby store</p>
                    <p className='border border-black mt-10 p-3'>Find a nearby store</p>
                </div>
                <div className='lg:w-2/3 lg:ml-20 image'>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper mb-20"
                    >
                        <SwiperSlide>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" />
                            <p className='mb-10'>Aesop Fashion Walk</p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            <p>Aesop MOKO</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg" />
                            <p>Aesop ifc mall</p>
                        </SwiperSlide>


                    </Swiper>
                </div>

            </div>


            {/* four site */}
            <div className='lg:flex'>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg" alt="" />
                </div>
                <div className='sm:ml-12 facial'>
                    <h1>Facial Appointments</h1>
                    <h2 className='text-3xl'>Composure for the skin and senses</h2>

                    <p className='mt-7'>Composure for the skin and senses Facial Appointments
                        For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>

                    <p className='border border-black mt-8 p-3 lg:w-2/3'>Learn more</p>
                </div>
            </div>

            <div className='sm:mt-60 sm:mb-60 text-center last'>
                <h3 className='text-3xl'>‘Nothing is ever ended, everything only begun.’</h3>
                <p className=''>Sara Teasdale</p>
            </div>
        </div>

    );
}

export default Third;