import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from 'react-icons/fi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="pt-20 pb-28 h-100 bg-black text-white ">

            <div className=" p-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
                <div>
                    <h2 className="font-bold">Subscribe to Aesop communications</h2>
                    <hr className="mt-2" />
                    <div className='email flex justify-between items-center mt-8  p-3 '>
                        <p >Email Address</p>
                        <p><GoArrowRight /></p>
                    </div>
                    <p className="mt-2 font-semibold">
                        Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className="underline underline-offset-4">privacy policy.</span></p>
                </div>
                <div>
                    <h2 className="font-bold">Orders and support</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Contact us </p>
                    <div className='flex  items-center  mt-2' >
                        <p >Faq</p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>Shipping</p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>Returns </p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>Order history</p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>



                    <p className="mt-2">Terms and conditions </p>
                </div>
                <div>
                    <h2 className="font-bold">Services</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Live assistance</p>
                    <p className="mt-2">Corporate gifts</p>
                    <p className="mt-2">Click and Collect</p>
                    <p className="mt-2">Facial Appointments</p>
                    <p className="mt-2">Video consultation</p>
                </div>
                <div>
                    <h2 className="font-bold">Location preferences</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Shipping:</p>
                    <p className="underline underline-offset-4 mt-2">Hong Kong SAR, China</p>
                    <p className="mt-2">Language: </p>
                    <p className="underline underline-offset-4 mt-2">English</p>
                    <p className="mt-2">繁體中文</p>
                </div>
                <div>
                    <h2 className="font-bold">Sustainability</h2>
                    <hr className="mt-2 mb-3" />
                    <p className="font-semibold">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div>
                    <h2 className="font-bold">About</h2>
                    <hr className="mt-2 mb-3" />
                    <p>Our story</p>
                    <p className="mt-2">Foundation</p>
                    <p className="mt-2">Careers</p>
                    <p className="mt-2">Privacy policy</p>
                    <p className="mt-2">Accessibility</p>
                    <p className="mt-2">Cookie Policy</p>
                </div>
                <div>
                    <h2 className="font-bold">Social media</h2>
                    <hr className="mt-2 mb-3" />
                    <p>Instagram </p>
                    <div className='flex  items-center mt-2' >
                        <p>Twitter</p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>LinkedIn </p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>WeChat</p>

                    </div>
                    <div className='flex  items-center mt-2' >
                        <p>Weibo</p>
                        <p className="ml-2"><FiArrowUpRight /></p>
                    </div>


                </div>
            </div>
            <div>
                <hr />
                <div className="flex justify-between gap-10 px-10 items-center">
                    <h3 className="mt-5 mr-8">&copy;Aesop</h3>
                    <div className=" flex gap-10 mt-6 lg:hidden">
                        <p className="text-4xl"><  AiOutlineInstagram /></p>
                        <p className="text-4xl"><AiFillLinkedin /></p>
                        <p className="text-4xl"><AiOutlineTwitter /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;