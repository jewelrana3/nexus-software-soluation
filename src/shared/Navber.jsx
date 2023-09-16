

import { } from "react-router-dom";





const Navber = () => {



    const navItem =
        <>
            <div className="lg:flex justify-around px-10">
                <div className="lg:flex">
                    <li>Skin Care</li>
                    <li>Body & Hand</li>
                    <li>Hair</li>
                    <li>Fragrance</li>
                    <li>Home</li>
                    {/* <li><NavLink to='/'>Home</NavLink></li> */}
                    <li>Kits & Travel</li>
                    <li>Gifts</li>
                    <li>Read</li>
                    <li>Stores</li>
                    <li>Facial Appointments</li>
                </div>
                <div className="lg:flex ml-96">
                    <li>Login</li>
                    <li>Cabinet</li>
                    <li>Cart</li>
                </div>
            </div>

        </>

    return (

        <div className="navbar fixed bg-white text-black z-10">
            <div className="navbar-start">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">
                    <img style={{ width: '50px' }} src="https://i.ibb.co/jrsk83C/mixing-f2031564.png" alt="" />
                    Cuisine <span className='text-red-500'>Qi</span>
                </a> */}
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-emerald-900 flex-none">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;