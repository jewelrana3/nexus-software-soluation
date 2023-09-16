

const Photo = () => {
    return (
        <div>
            <div>
                <h2 className='text-center  font-bold text-4xl'></h2>
                <div id="" className="carousel-item relative w-full text-white pt-28">
                    <img style={{ height: '40rem' }} src='https://i.ibb.co/2h9Y3pN/Aesop-Othertopias-2023-Web-Homepage-2-Primary-Full-Bleed-Desktop-2880x1044px-1.jpg' className="w-full" />
                    <div className="absolute lg:flex mx-auto mt-40">
                        <h2 className='text-4xl font-bold ml-8'>Aesop</h2>
                        <div className="doorway lg:ml-16 mt-3">
                            <div className="text-side">
                                <h1>Doorways to the undiscovered</h1>
                                <h2 className="text-4xl font-semibold mt-2">Othertopias: a collection <br /> of unorthodox fragrances</h2>
                                <p className="mt-3">Step inside six fragrant worlds that transcend our <br /> immediate perception—vivid and distinctive.</p>
                                <p className="border border-gray-200 mt-3 p-3 w-3/4">Discover the figrances</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Photo;