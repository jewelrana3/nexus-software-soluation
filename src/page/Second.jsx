import { GoArrowRight } from 'react-icons/go';

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
                <div className='lg:flex'>
                    <div className='juyel lg:ml-12'>
                        <h1>Parsley Seed Skin Care</h1>
                        <h2 className='mt-8 sm:text-3xl'>In warm or humid urban <br /> settings, skin is vulnerable to  a range of environmental <br /> factors.</h2>
                        <p className='mt-3 mb-3'>Pollution, air-conditioning and the stresses of city <br /> life can heighten skin’s susceptibility to free <br /> radical damage and dehydration. Anti-oxidant rich <br /> Parsley Seed formulations help to support skin  against these effects.</p>
                        
                        <div className='cblack flex justify-between mt-8 border border-black lg:w-3/4 p-3 '>
                            <p >Regimens for warm climates</p>
                            <p><GoArrowRight /></p>
                        </div>
                    </div>
                    <div className='lg:ml-10'>
                        <img src="https://i.ibb.co/rHXdXYb/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px-1.jpg" alt="" />
                    </div>
                </div>
                <div className='lg:flex mt-20'>
                    <div>
                        <video loop autoPlay src='https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4' type="video/mp4"></video>
                    </div>
                    <div className='decode lg:ml-10 sm:px-10'>
                        <h1>The Athenaeum</h1>
                        <h2 className='mt-6 text-3xl'>Decoding Fragrance</h2>
                        <p>The language of notes, sillage and aromatic <br /> profiles allows us to describe perfume. Discover our guide to selecting a signature fragrance.</p>

                        <div className='cblack flex justify-between items-center mt-8 border border-black lg:w-3/4  p-3 '>
                            <p className=''>Read More </p>
                            <p><GoArrowRight /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
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
                            <h1>For warm climates</h1>
                            <h2 className='text-3xl font-normal mt-3'>Adjusting to seasonal change</h2>
                            <h4 className='mt-3'>In the warmer months, high temperatures and humidity can lead to increased sebum production for normal, combination, and oily skins. Accordingly, the use of slightly lighter formulations is recommended.</h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='second flex mr-8'>
                            <div>
                                <img className='mt-24' src="https://i.ibb.co/8PjKXfB/Aesop-Skin-Lucent-Facial-Concentrate-60m-L-Web-Large-684x668px-1.png" />
                                <div className='text-center mb-8'>
                                    <p className=''>Ouranon Eau De Farfum</p>
                                    <p>Woody,specy,resious</p>
                                </div>
                            </div>
                            <div>
                                <img className='mt-24' src="https://i.ibb.co/sCsVhR1/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75m-L-large-1.png" />
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
                                <img className='mt-24' src="https://i.ibb.co/WsTqjNc/Aesop-Skin-Protective-Facial-Lotion-SPF25-Asia-EU-Web-Large-782x796px-1.png" />
                                <div className='text-center mb-8'>
                                    <p className=''>Ouranon Eau De Farfum</p>
                                    <p>Woody,specy,resious</p>
                                </div>
                            </div>
                            <div>
                                <img className='mt-24' src="https://i.ibb.co/bv90Mtm/Aesop-Skin-Protective-Lip-Balm-SPF30-5-5g-large-1.png" />
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
                                <img className='mt-24' src="https://i.ibb.co/bv90Mtm/Aesop-Skin-Protective-Lip-Balm-SPF30-5-5g-large-1.png" />
                                <div className='text-center mb-8'>
                                    <p className=''>Ouranon Eau De Farfum</p>
                                    <p>Woody,specy,resious</p>
                                </div>
                            </div>
                            <div>
                                <img className='mt-24' src="https://i.ibb.co/sCsVhR1/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75m-L-large-1.png" />
                                <div className='text-center 8'>
                                    <p className=''>Gloam Eau de parfum</p>
                                    <p >Floral,spicy.green</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </>
    );
}


export default Second;