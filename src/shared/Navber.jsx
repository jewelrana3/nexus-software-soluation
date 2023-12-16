


import { AiOutlineSearch } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';



const Navber = () => {


    const navItem =
        <div className='list flex cursor-pointer'>
            <li>Skin Care</li>
            <li>Body & Hand</li>
            <li>Hair</li>
            <li>Fragrance</li>
            <li>Home</li>
            <li>Kits & Travel</li>
          
            


        </div>

    return (
        <div className="navbar  sm:bg-slate-300 text-black z-10 w-full lg:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className='flex items-center man gap-14 lg:hidden'>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <p><AiOutlineSearch className='text-white text-2xl' /></p>
                        <p className='text-white'>Cart</p>
                        <p className='text-white'><GiSelfLove /></p>
                        <p className='text-xl text-white'>Aesob</p>
                    </div>
                    <ul tabIndex={0} className="menu -mr-30  menu-sm dropdown-content mt-1 bg-lime-950 text-white p-20 flex-none">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            </div>

            <div className="navbar-end last-li cursor-pointer">
                <li>Log in</li>
                <li>Cabinet</li>
                <li>Cart</li>
                <li></li>
            </div>
        </div>

    );
};

export default Navber;