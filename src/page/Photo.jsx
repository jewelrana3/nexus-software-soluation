
import { GoArrowRight } from 'react-icons/go';

const Photo = () => {
    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-4xl'></h2>
                <div id="" className="carousel-item relative w-full text-white ">
                    <img style={{ height: '40rem' }} src='https://i.ibb.co/2h9Y3pN/Aesop-Othertopias-2023-Web-Homepage-2-Primary-Full-Bleed-Desktop-2880x1044px-1.jpg' className="w-full" />
                    <div className="photos w-full absolute lg:flex mx-auto mt-40">
                        <h2 className='text-4xl font-bold ml-8 aesop'>Aesop</h2>
                        <div className="lg:ml-16">
                            <div className="doorway">
                                <h1>Doorways to the undiscovered</h1>
                                <h2 className="sm:text-4xl font-semibold mt-2">Othertopias: a collection <br /> of unorthodox fragrances</h2>
                                <p className="mt-3">Step inside six fragrant worlds that transcend our <br /> immediate perception—vivid and distinctive.</p>
                             
                                <div className='firstBor flex justify-between items-center mt-8 lg:w-3/4  p-3 '>
                                    <p className=''>Discover the figrances </p>
                                    <p><GoArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Photo;