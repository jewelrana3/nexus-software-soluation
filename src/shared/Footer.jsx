

const Footer = () => {
    return (
        <div className="pt-20 pb-28 h-100 bg-black text-white ">
            
            <div className=" p-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <div>
                    <h2 className="font-bold">Subscribe to Aesop communications</h2>
                    <hr className="mt-2" />
                    <h2 className="border border-zinc-300 mt-6 p-2">Email Address</h2>
                    <p className="mt-2 font-semibold">
                        Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className="underline underline-offset-4">privacy policy.</span></p>
                </div>
                <div>
                    <h2 className="font-bold">Orders and support</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Contact us </p>
                    <p>FAQs</p>
                    <p>Shipping</p>
                    <p>Returns </p>
                    <p>Order history</p>
                    <p>Terms and conditions </p>
                </div>
                <div>
                    <h2 className="font-bold">Services</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial Appointments</p>
                    <p>Click and Collect</p>
                    <p>Video consultation</p>
                </div>
                <div>
                    <h2 className="font-bold">Location preferences</h2>
                    <hr className="mt-2" />
                    <p className="mt-5">Shipping:</p>
                    <p className="underline underline-offset-4">Hong Kong SAR, China</p>
                    <p>Language: </p>
                    <p className="underline underline-offset-4">English</p>
                    <p>繁體中文</p>
                </div>
                <div>
                    <h2 className="font-bold">Sustainability</h2>
                    <hr className="mt-2" />
                    <p className="font-semibold">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div>
                    <h2 className="font-bold">About</h2>
                    <hr className="mt-2" />
                    <p>Our story</p>
                    <p>Foundation</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>
                    <p>Accessibility</p>
                    <p>Cookie Policy</p>
                </div>
                <div>
                    <h2 className="font-bold">Social media</h2>
                    <hr className="mt-2" />
                    <p>Instagram </p>
                    <p>Twitter </p>
                    <p>LinkedIn </p>
                    <p>WeChat</p>
                    <p>Weibo </p>

                </div>
            </div>
          <div>
            <hr />
            <h3 className="mt-5">&copy;Aesop</h3>
          </div>
        </div>
    );
};

export default Footer;