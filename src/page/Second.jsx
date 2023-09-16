

import React, { useRef, useState } from 'react';
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

const Second = () => {
    return (
        <>
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
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper mb-28 mt-10"
            >
                <SwiperSlide>
                    <div className='ml-16 mt-36'>
                        <h1>Fragrance</h1>
                        <h2 className='text-3xl font-normal mt-3'>Our Personal Scents</h2>
                        <h4 className='mt-3'>Unorthodox, evocative, and refined, Aesop fragrances are <br /> sensory bridges to memory and connection points to those <br /> around us.</h4>
                        <p className='mt-3'>See all Fragrance </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='second flex mr-8'>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center mb-8'>
                                <p className=''>Ouranon Eau De Farfum</p>
                                <p>Woody,specy,resious</p>
                            </div>
                        </div>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center 8'>
                                <p className=''>Gloam Eau de parfum</p>
                                <p className='mb-20'>Floral,spicy.green</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='second flex mr-8'>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center mb-8'>
                                <p className=''>Ouranon Eau De Farfum</p>
                                <p>Woody,specy,resious</p>
                            </div>
                        </div>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center 8'>
                                <p className=''>Gloam Eau de parfum</p>
                                <p>Floral,spicy.green</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='second flex mr-8'>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center mb-8'>
                                <p className=''>Ouranon Eau De Farfum</p>
                                <p>Woody,specy,resious</p>
                            </div>
                        </div>
                        <div>
                            <img className='mt-24' src="https://i.ibb.co/qYHDVx2/Aesop-Fragrance-Gloam-Eau-de-Parfum-50m-L-Web-Front-Large-900x878px-1.png" />
                            <div className='text-center 8'>
                                <p className=''>Gloam Eau de parfum</p>
                                <p >Floral,spicy.green</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <div>
                <div className='flex'>
                    <div className='ml-12'>
                        <h1>Parsley Seed Skin Care</h1>
                        <h1 className='mt-8 text-3xl'>In warm or humid urban settings, skin is vulnerable to a range of environmental factors.</h1>
                        <p className='mt-3 mb-3'>Pollution, air-conditioning and the stresses of city life can heighten skin’s susceptibility to free radical damage and dehydration. Anti-oxidant rich Parsley Seed formulations help to support skin against these effects.</p>
                        <p className='border border-black w-2/4 p-3'>Regimens for warm climates</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/rHXdXYb/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Second;